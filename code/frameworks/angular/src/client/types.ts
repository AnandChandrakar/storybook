import { Provider, importProvidersFrom } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import {
  Parameters as DefaultParameters,
  StoryContext as DefaultStoryContext,
  WebRenderer,
} from '@storybook/types';

export interface NgModuleMetadata {
  /**
   * List of components, directives, and pipes that belong to your component.
   */
  declarations?: any[];
  entryComponents?: any[];
  /**
   * List of modules that should be available to the root Storybook Component and all its children.
   * If you want to register singleton services or if you want to use the forRoot() pattern, please use the `applicationProviders` property in combination with the importProvidersFrom helper function from @angular/core instead.
   */
  imports?: any[];
  schemas?: any[];
  /**
   * List of providers that should be available on the root component and all its children.
   */
  providers?: Provider[];
}
export interface ICollection {
  [p: string]: any;
}

export interface StoryFnAngularReturnType {
  props?: ICollection;
  moduleMetadata?: NgModuleMetadata;
  applicationConfig?: ApplicationConfig;
  template?: string;
  styles?: string[];
  userDefinedTemplate?: boolean;
}

/**
 * @deprecated Use `AngularRenderer` instead.
 */
export type AngularFramework = AngularRenderer;
export interface AngularRenderer extends WebRenderer {
  component: any;
  storyResult: StoryFnAngularReturnType;
}

export type Parameters = DefaultParameters & {
  bootstrapModuleOptions?: unknown;
};

export type StoryContext = DefaultStoryContext<AngularRenderer> & { parameters: Parameters };
