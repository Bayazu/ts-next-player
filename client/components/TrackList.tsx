import React, { FC } from "react";
import { ITrack } from "../types/track";
import { Grid, Box } from "@mui/material";
import TrackItem from "./TrackItem";

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;