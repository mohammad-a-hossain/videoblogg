import { configureStore } from '@reduxjs/toolkit';
import relatedVideosReducer from '../features/reletedVideo/relatedVideosSlice';
import tagsReducer from '../features/tags/tagsSlice';
import videoReducer from '../features/video/videoSlice';
import videosReducer from '../features/videos/videoSlice';
import filtersReducer from '../features/filters/filtersSlice';
import {getRelatedAuthors } from '../features/authors/authorApi';


export const store = configureStore({
  reducer: {
      tags: tagsReducer,
     videos: videosReducer,
     video: videoReducer,
     relatedVideos:relatedVideosReducer,
     filters:filtersReducer,
     authors:getRelatedAuthors
  },
});
