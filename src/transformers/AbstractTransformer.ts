/* eslint-disable no-dupe-class-members */

import { SourceType } from "../enums/SourceType";

export abstract class AbstractTransformer<ResultType, GraphQLType, RestType> {
  protected abstract graphql(data: GraphQLType): ResultType;
  protected abstract rest(data: RestType): ResultType;

  public run(data: GraphQLType, sourceType: SourceType.GRAPHQL): ResultType;
  public run(data: RestType, sourceType: SourceType.REST): ResultType;
  public run(data: GraphQLType | RestType, sourceType: SourceType): ResultType {
    if (data === undefined) {
      return undefined;
    }

    if (data === null) {
      return null;
    }

    if (sourceType === SourceType.GRAPHQL) {
      return this.graphql(data as GraphQLType);
    } else {
      return this.rest(data as RestType);
    }
  }
}
