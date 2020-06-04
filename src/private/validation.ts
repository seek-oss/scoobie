import { MdxElement } from './types';

const isObject = (value: unknown): value is Record<PropertyKey, unknown> =>
  typeof value === 'object' && value !== null;

const isString = (value: unknown): value is string => typeof value === 'string';

export const isMdxElement = (component: unknown): component is MdxElement =>
  isObject(component) &&
  isObject(component.props) &&
  isString(component.props.mdxType);
