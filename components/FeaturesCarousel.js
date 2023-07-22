import React from 'react';
import CalendarFeatureImage from '../public/calendar_feature.png';
import InviteTeamFeatureImage from '../public/invite_team_feature.png';
import MetronomeFeatureImage from '../public/metronome_feature.png';
import NotesFeatureImage from '../public/notes_feature.png';
import MultipleTeamsFeatureImage from '../public/multiple_teams_feature.png';
import FilesFeatureImage from '../public/files_feature.png';

export default function FeaturesCarousel({ selectedFeature }) {
  function getImageUrl() {
    if (selectedFeature === 'invite') {
      return InviteTeamFeatureImage.src;
    }
    if (selectedFeature === 'calendar') {
      return CalendarFeatureImage.src;
    }
    if (selectedFeature === 'files') {
      return FilesFeatureImage.src;
    }
    if (selectedFeature === 'metronome') {
      return MetronomeFeatureImage.src;
    }
    if (selectedFeature === 'notes') {
      return NotesFeatureImage.src;
    }
    if (selectedFeature === 'multiple') {
      return MultipleTeamsFeatureImage.src;
    }
  }

  return (
    <>
      <img
        src={getImageUrl()}
        key={getImageUrl()}
        width={350}
        alt="Picture of iPhone showing off Cadence features"
      />
    </>
  );
}
