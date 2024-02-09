import type { Schema, Attribute } from '@strapi/strapi';

export interface GalleryContentTypesFrame extends Schema.Component {
  collectionName: 'components_gallery_content_types_frames';
  info: {
    displayName: 'Frame';
    icon: 'picture';
  };
  attributes: {
    frameTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<'Untitled Frame'>;
    frameContext: Attribute.Text & Attribute.Required;
    framePiece: Attribute.Media & Attribute.Required;
  };
}

export interface GalleryContentTypesMotion extends Schema.Component {
  collectionName: 'components_gallery_content_types_motions';
  info: {
    displayName: 'Motion';
    icon: 'television';
    description: '';
  };
  attributes: {
    motionTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<'Untitled Motion'>;
    motionContext: Attribute.Text;
    motionPiece: Attribute.Media & Attribute.Required;
    motionCover: Attribute.Media & Attribute.Required;
  };
}

export interface GalleryContentTypesTrack extends Schema.Component {
  collectionName: 'components_gallery_content_types_tracks';
  info: {
    displayName: 'Track';
    icon: 'music';
    description: '';
  };
  attributes: {
    trackTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<'Untitled Track'>;
    trackContext: Attribute.Text;
    trackPiece: Attribute.Media & Attribute.Required;
    trackCover: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'gallery-content-types.frame': GalleryContentTypesFrame;
      'gallery-content-types.motion': GalleryContentTypesMotion;
      'gallery-content-types.track': GalleryContentTypesTrack;
    }
  }
}
