import Feature from './Feature';
import {
  IoPeople,
  IoCalendar,
  IoDocumentAttach,
  IoDuplicate,
  IoMusicalNotes,
  IoApps,
} from 'react-icons/io5';

export default function Features({ selectedFeature, onFeatureChange }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Feature
        name="Invite team members"
        selected={selectedFeature === 'invite'}
        onClick={() => onFeatureChange('invite')}
        icon={<IoPeople className="w-6 h-6" />}
      >
        Add your entire team.
      </Feature>
      <Feature
        name="Calendar"
        selected={selectedFeature === 'calendar'}
        onClick={() => onFeatureChange('calendar')}
        icon={<IoCalendar className="w-6 h-6" />}
      >
        Plan and notify your team of upcoming gigs.
      </Feature>
      <Feature
        name="Files"
        selected={selectedFeature === 'files'}
        onClick={() => onFeatureChange('files')}
        icon={<IoDocumentAttach className="w-6 h-6" />}
      >
        Attach files like MP3s and sheet music to songs for team members to
        view.
      </Feature>
      <Feature
        name="Metronome"
        selected={selectedFeature === 'metronome'}
        onClick={() => onFeatureChange('metronome')}
        icon={<IoMusicalNotes className="w-6 h-6" />}
      >
        Practice with a metronome. Manually set the tempo or tap to find the
        tempo.
      </Feature>
      <Feature
        name="Sticky notes"
        selected={selectedFeature === 'notes'}
        onClick={() => onFeatureChange('notes')}
        icon={<IoDuplicate className="w-6 h-6" />}
      >
        Add sticky notes to songs for future reminders.
      </Feature>
      <Feature
        name="Multiple teams"
        selected={selectedFeature === 'multiple'}
        onClick={() => onFeatureChange('multiple')}
        icon={<IoApps className="w-6 h-6" />}
      >
        Part of more than one team? Switching between teams is a breeze .
      </Feature>
    </div>
  );
}
