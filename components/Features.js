import Feature from "./Feature";

export default function Features() {
	return (
		<div className="grid grid-cols-4 gap-8">
			<Feature name="Invite team members">
				Add your entire team. Any changes you make in a song can be seen by everyone.
			</Feature>
			<Feature name="Notifications">
				Configure if you'd like to receive notifications through email, text message or both.
			</Feature>
			<Feature name="Calendar">
				Plan and automatically notify your team members of upcoming rehearsals and gigs.
			</Feature>
			<Feature name="Binders">Organize similar songs into binders.</Feature>
			<Feature name="Sets">Create sets for performances and view them distraction free. </Feature>
			<Feature name="Metronome">
				Easily access a metronome when rehearsing a song. Manually set the tempo or tap to find the
				tempo.
			</Feature>
			<Feature name="Sticky notes">
				Add notes to a song when you need to remind yourself of a detail during performance.
			</Feature>
			<Feature name="Multiple teams">
				Part of more than one team? No problem! Switching between teams is a breeze .
			</Feature>
		</div>
	);
}
