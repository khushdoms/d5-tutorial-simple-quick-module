// External library dependencies.
import React, {
  useEffect,
} from 'react';

// WordPress package dependencies.
const {
  addAction,
} = window?.vendor?.wp?.hooks;

// Divi package dependencies.
const {
  RichTextContainer,
  TextContainer,
  RangeContainer,
} = window?.divi?.fieldLibrary;
const {
  GroupContainer
} = window?.divi?.modal;
const {
  // Renderer - HTML
  ModuleContainer,

  // Renderer - Styles
  StyleContainer,

  // Renderer - Classnames
  elementClassnames,

  // Settings - Content
  AdminLabelGroup,
  BackgroundGroup,
  FieldContainer,

  // Settings - Design
  AnimationGroup,
  BorderGroup,
  BoxShadowGroup,
  FiltersGroup,
  FontGroup,
  FontBodyGroup,
  SizingGroup,
  SpacingGroup,
  TransformGroup,

  // Settings - Advanced
  PositionSettingsGroup,
  ScrollSettingsGroup,
  TransitionGroup,
  VisibilitySettingsGroup,
} = window?.divi?.module;
const {
  registerModule
} = window?.divi?.moduleLibrary;
const {
  useFetch,
} = window?.divi?.rest;

// Module metadata that is used in both Frontend and Visual Builder.
import metadata from './module.json';

/**
 * React function component for rendering module style.
 */
const ModuleStyles = ({
  attrs,
  elements,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag
}) => (
  <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
    {/* Element: Module */}
    {elements.style({
      attrName: 'module',
      styleProps: {
        disabledOn: {
          disabledModuleVisibility: settings?.disabledModuleVisibility
        }
      }
    })}

    {/* Element: Title */}
    {elements.style({
      attrName: 'title',
    })}

    {/* Element: Content */}
    {elements.style({
      attrName: 'content',
    })}
  </StyleContainer>
);

/**
 * React function component for registering module script data.
 */
const ModuleScriptData = ({
  elements,
}) => (
  <React.Fragment>
    {elements.scriptData({
      attrName: 'module',
    })}
  </React.Fragment>
);

/**
 * Function for registering module classnames.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs,
}) => {
  // Add element classnames.
  classnamesInstance.add(
    elementClassnames({
      attrs: attrs?.module?.decoration ?? {},
    }),
  );
}

/**
 * Simple Quick Module.
 */
const simpleQuickModule = {
  // Metadata that is used on Visual Builder and Frontend
  metadata,

  // Layout renderer components.
  renderers: {
    // React Function Component for rendering module's output on layout area.
    edit: ({
      attrs,
      id,
      name,
      elements,
    }) => {
      // Divi's hook for fetching value from REST API, and handling loading state.
      const {
        fetch,
        response,
        isLoading,
      } = useFetch({
        html: '',
      });

      // Attribute for handling number of posts to be displayed.
      // If you have question on why it has to be in nested object, we'll explain this on the later tutorial.
      const postsNumber = attrs?.recentPosts?.innerContent?.desktop?.value?.postsNumber;

      // React hook that will execute the callback (in this case, fetching value from REST API endpoint)
      // whenever the `postsNumber` value is changed.
      useEffect(() => {
        // Fetch value from this REST API endpoint. The returned value will be available
        // on `response` properties of `useFetch` hook declaration above.
        fetch({
          method: 'GET',
          restRoute: `/wp/v2/posts?context=view&per_page=${postsNumber}`,
          data: {
            postsNumber: postsNumber,
          },
        }).catch(error => {
          console.log(error);
        })

      // This will make sure that the callback is only executed when the `postsNumber` value is changed.
      }, [postsNumber]);

      useEffect(() => {
    if(fetchAbortRef.current) {
      fetchAbortRef.current.abort();
    }

    fetchAbortRef.current = new AbortController();

    fetch({
      restRoute: `/wp/v2/posts?context=view&per_page=${postsNumber}`,
      method:    'GET',
      signal:    fetchAbortRef.current.signal,
    }).
    catch((error) => {
      console.error(error);
    });

    return () => {
      if(fetchAbortRef.current) {
        fetchAbortRef.current.abort();
      }
    };
  }, [postsNumber]);

      return (
        <ModuleContainer
          attrs={attrs}
          elements={elements}
          id={id}
          moduleClassName="d5_tut_simple_quick_module"
          name={name}
          scriptDataComponent={ModuleScriptData}
          stylesComponent={ModuleStyles}
          classnamesFunction={moduleClassnames}
        >
          {elements.styleComponents({
            attrName: 'module',
          })}
          <div className="et_pb_module_inner">
            {elements.render({
              attrName: 'title',
            })}
            {elements.render({
              attrName: 'content',
            })}
            {isLoading ? 'Loading...' : (<div
              className="d5-tut-simple-quick-module-recent-posts"
              dangerouslySetInnerHTML={{
                __html: response?.html,
              }}
            />)}
          </div>
        </ModuleContainer>
      )
    },
  },

  // Settings component.
  settings: {
    // React function component that renders module settings' content panel.
    content: ({ defaultSettingsAttrs }) => (
      <React.Fragment>
        <GroupContainer
          id="mainContent"
          title="Text"
        >
          <FieldContainer
            attrName="title.innerContent"
            label="Title"
            description="Title"
          >
            <TextContainer />
          </FieldContainer>
          <FieldContainer
            attrName="content.innerContent"
            label="Content"
          >
            <RichTextContainer />
          </FieldContainer>
          {/* New field for modifying number of posts that will be rendered */}
          <FieldContainer
            attrName="recentPosts.innerContent"
            subName="postsNumber"
            label="Number of Posts"
          >
            <RangeContainer
              min={1}
              minLimit={1}
              max={10}
              maxLimit={10}
              defaultUnit=""
              allowedUnits={['']}
            />
          </FieldContainer>
        </GroupContainer>
        <BackgroundGroup />
        <AdminLabelGroup
          defaultGroupAttr={defaultSettingsAttrs?.adminLabel}
        />
      </React.Fragment>
    ),

    // React function component that renders module settings' design panel.
    design: () => (
      <React.Fragment>
        <FontGroup
          attrName="title.decoration.font"
          groupLabel="Title Font"
        />
        <FontBodyGroup
          attrName="content.decoration.bodyFont"
          groupLabel="Content Font"
        />
        <SizingGroup />
        <SpacingGroup />
        <BorderGroup />
        <BoxShadowGroup />
        <FiltersGroup />
        <TransformGroup />
        <AnimationGroup />
      </React.Fragment>
    ),

    // React function component that renders module settings' advanced panel.
    advanced: () => (
      <React.Fragment>
        <VisibilitySettingsGroup />
        <TransitionGroup />
        <PositionSettingsGroup />
        <ScrollSettingsGroup />
      </React.Fragment>
    ),
  },

  // Attribute that is automatically added into the module when the module is inserted
  // into the layout so that the newly inserted module has some placeholder content
  placeholderContent: {
    module: {
      decoration: {
        background: {
          desktop: {
            value: {
              color: '#DFDFDF',
            }
          }
        },
      }
    },
    title: {
      innerContent: {
        desktop: {
          value: 'Module Title'
        }
      }
    },
    content: {
      innerContent: {
        desktop: {
          value: 'Module Content'
        }
      }
    }
  },
};

// Register module.
addAction('divi.moduleLibrary.registerModuleLibraryStore.after', 'd5Tut.simpleQuickModule', () => {
  registerModule(simpleQuickModule.metadata, simpleQuickModule);
});