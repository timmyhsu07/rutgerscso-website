import Reveal from "./Reveal";
import {
  CampusGathering,
  FestivalPoster,
  MapGraphic,
  SharedTable,
} from "./art/Illustrations";
import { org } from "@/lib/data";

/** The stacked illustration collage that runs alongside the about copy. */
export default function VisualStory() {
  return (
    <Reveal className="visual-story">
      <div className="visual-story__vertical" aria-hidden="true">
        {org.short}
      </div>
      <div
        className="story-image story-image--wide story-image--caption"
        data-caption="Campus / Community"
      >
        <CampusGathering />
      </div>
      <div
        className="story-image story-image--tall story-image--caption"
        data-caption="Tradition / Shared"
      >
        <FestivalPoster />
      </div>
      <div
        className="story-image story-image--caption"
        data-caption="Food / Friendship"
      >
        <SharedTable />
      </div>
      <div
        className="story-image story-image--caption"
        data-caption="Rutgers / New Brunswick"
      >
        <MapGraphic />
      </div>
    </Reveal>
  );
}
