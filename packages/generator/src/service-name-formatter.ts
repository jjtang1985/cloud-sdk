/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import { toPropertyFormat, toStaticPropertyFormat } from '@sap-cloud-sdk/core';
import voca from 'voca';
import { stripPrefix } from './internal-prefix';
import { applyPrefixOnJsConfictFunctionImports } from './name-formatting-strategies';
import { UniqueNameFinder } from './unique-name-finder';
import { reservedServiceKeywords } from './name-formatting-reserved-key-words';

export class ServiceNameFormatter {
  private finderServiceWide = new UniqueNameFinder(
    '_',
    reservedServiceKeywords
  );

  private parameterNamesFinder: {
    [functionImportName: string]: UniqueNameFinder;
  } = {};

  private staticPropertyNamesFinder: {
    [entitySetOrComplexTypeName: string]: UniqueNameFinder;
  } = {};
  private instancePropertyNamesFinder: {
    [entitySetOrComplexTypeName: string]: UniqueNameFinder;
  } = {};

  constructor(
    entitySetNames: string[],
    complexTypeNames: string[],
    functionImportNames: string[]
  ) {
    // Here we assume that entitysets and complextypes cannot have the same original name
    [...entitySetNames, ...complexTypeNames].forEach(
      entitySetOrComplexTypeName => {
        this.staticPropertyNamesFinder[
          entitySetOrComplexTypeName
        ] = new UniqueNameFinder();
        this.instancePropertyNamesFinder[
          entitySetOrComplexTypeName
        ] = new UniqueNameFinder();
      }
    );

    functionImportNames.forEach(functionImportName => {
      this.parameterNamesFinder[functionImportName] = new UniqueNameFinder();
    });
  }

  originalToServiceName(name: string): string {
    let formattedName = name.replace(/\.|\//g, '_');
    formattedName = stripAPIUnderscore(formattedName);
    formattedName = stripUnderscoreSrv(formattedName);
    formattedName = voca.kebabCase(formattedName);
    return formattedName.endsWith('service')
      ? formattedName
      : `${formattedName}-service`;
  }

  originalToStaticPropertyName(
    originalContainerTypeName: string,
    originalPropertyName: string
  ): string {
    const transformedName = toStaticPropertyFormat(
      stripPrefix(originalPropertyName)
    );
    const finder = this.getOrInitStaticPropertyNameFinder(
      originalContainerTypeName
    );
    const newName = finder.findUniqueName(transformedName);

    finder.addToAlreadyUsedNames(newName);
    return newName;
  }

  originalToInstancePropertyName(
    originalContainerTypeName: string,
    originalPropertyName: string
  ): string {
    const transformedName = toPropertyFormat(stripPrefix(originalPropertyName));

    const finder = this.getOrInitInstancePropertyNameFinder(
      originalContainerTypeName
    );
    const newName = finder.findUniqueName(transformedName);

    finder.addToAlreadyUsedNames(newName);
    return newName;
  }

  originalToFunctionImportName(str: string): string {
    const transformedName = voca.camelCase(str);
    const newName = this.finderServiceWide.findUniqueName(transformedName);

    this.finderServiceWide.addToAlreadyUsedNames(newName);
    return applyPrefixOnJsConfictFunctionImports(newName);
  }

  originalToComplexTypeName(str: string): string {
    const transformedName = stripAUnderscore(voca.titleCase(str)).replace(
      '_',
      ''
    );

    const newName = this.finderServiceWide.findUniqueName(transformedName);

    this.finderServiceWide.addToAlreadyUsedNames(newName);
    return newName;
  }

  typeNameToFactoryName(str: string, reservedNames: Set<string>): string {
    let factoryName = `create${str}`;
    let index = 1;
    while (reservedNames.has(factoryName)) {
      factoryName = `${factoryName}_${index}`;
      index += 1;
    }
    const newName = this.finderServiceWide.findUniqueName(factoryName);

    this.finderServiceWide.addToAlreadyUsedNames(newName);
    return newName;
  }

  originalToNavigationPropertyName(
    entitySetName: string,
    originalPropertyName: string
  ): string {
    const transformedName = voca.camelCase(originalPropertyName);

    const finder = this.getOrInitInstancePropertyNameFinder(entitySetName);
    const newName = finder.findUniqueName(transformedName);

    finder.addToAlreadyUsedNames(newName);
    return newName;
  }

  originalToParameterName(
    originalFunctionImportName: string,
    originalParameterName: string
  ): string {
    const transformedName = voca.camelCase(originalParameterName);

    const finder = this.getOrInitParameterNameFinder(
      originalFunctionImportName
    );
    const newName = finder.findUniqueName(transformedName);

    finder.addToAlreadyUsedNames(newName);
    return newName;
  }

  originalToEntityClassName(entitySetName: string): string {
    let transformedName = entitySetName;
    if (transformedName.endsWith('Collection')) {
      transformedName = stripCollection(entitySetName);
    }

    transformedName = stripAUnderscore(voca.titleCase(transformedName));

    const newNames = this.finderServiceWide.findUniqueNameWithSuffixes(
      transformedName,
      getInterfaceNamesSuffixes()
    );
    this.finderServiceWide.addToAlreadyUsedNames(...newNames);
    return newNames[0];
  }

  directoryToSpeakingModuleName(packageName: string): string {
    return voca.titleCase(packageName.replace(/-/g, ' '));
  }

  private getOrInitStaticPropertyNameFinder(name: string): UniqueNameFinder {
    if (this.staticPropertyNamesFinder[name]) {
      return this.staticPropertyNamesFinder[name];
    }
    this.staticPropertyNamesFinder[name] = new UniqueNameFinder();
    return this.staticPropertyNamesFinder[name];
  }

  private getOrInitInstancePropertyNameFinder(name: string): UniqueNameFinder {
    if (this.instancePropertyNamesFinder[name]) {
      return this.instancePropertyNamesFinder[name];
    }
    this.instancePropertyNamesFinder[name] = new UniqueNameFinder();
    return this.instancePropertyNamesFinder[name];
  }

  private getOrInitParameterNameFinder(name: string): UniqueNameFinder {
    if (this.parameterNamesFinder[name]) {
      return this.parameterNamesFinder[name];
    }
    this.parameterNamesFinder[name] = new UniqueNameFinder();
    return this.parameterNamesFinder[name];
  }
}

function stripUnderscoreSrv(name: string) {
  return name.endsWith('_SRV') ? name.substr(0, name.length - 4) : name;
}

function stripAPIUnderscore(name: string) {
  return name.startsWith('API_') ? name.substring(4, name.length) : name;
}

export function stripCollection(name: string) {
  return name.endsWith('Collection')
    ? name.substring(0, name.length - 10)
    : name;
}

function stripAUnderscore(name: string) {
  return name.startsWith('A_') ? name.substring(2, name.length) : name;
}

function getInterfaceNamesSuffixes(): string[] {
  return ['Type', 'TypeForceMandatory'];
}
