/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import { getFilter } from '../../../../src/odata/v4/uri-conversion/get-filter';
import {
  testFilterLambdaExpressionFilterFunctionOnLink,
  testFilterLambdaExpressionFilterLinkOnLink,
  testFilterLambdaExpressionFilterListOnLink,
  testFilterLambdaExpressionOnLink,
  testFilterString,
  testFilterStringV4,
  testNestedFilterLambdaExpressionOnLink
} from '../../../test-util/filter-factory';
import { TestEntity } from '../../../test-util/test-services/v4/test-service';

describe('get filters', () => {
  it('for simple filters', () => {
    expect(getFilter(testFilterStringV4.filter, TestEntity).filter).toBe(
      `${testFilterString.odataStr}`
    );
  });

  it('for lambda expression with simple filter on one-to-many navigation property', () => {
    expect(
      getFilter(testFilterLambdaExpressionOnLink.filter, TestEntity).filter
    ).toBe(testFilterLambdaExpressionOnLink.odataStr);
  });

  it('for lambda expression with FilterList on one-to-many navigation property', () => {
    expect(
      getFilter(testFilterLambdaExpressionFilterListOnLink.filter, TestEntity)
        .filter
    ).toBe(testFilterLambdaExpressionFilterListOnLink.odataStr);
  });

  it('for lambda expression with FilterLink on one-to-many navigation property', () => {
    expect(
      getFilter(testFilterLambdaExpressionFilterLinkOnLink.filter, TestEntity)
        .filter
    ).toBe(testFilterLambdaExpressionFilterLinkOnLink.odataStr);
  });

  it('for nested lambda expression on one-to-many navigation property', () => {
    expect(
      getFilter(testNestedFilterLambdaExpressionOnLink.filter, TestEntity)
        .filter
    ).toBe(testNestedFilterLambdaExpressionOnLink.odataStr);
  });

  it('for lambda expression with filter function on one-to-many navigation property', () => {
    expect(
      getFilter(
        testFilterLambdaExpressionFilterFunctionOnLink.filter,
        TestEntity
      ).filter
    ).toBe(testFilterLambdaExpressionFilterFunctionOnLink.odataStr);
  });
});
