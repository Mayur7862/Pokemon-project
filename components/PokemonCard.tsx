import { Card, CardContent, Typography } from '@mui/material';

type PokemonCardProps = {
  name: string;
  image: string;
  type: string;
};

export const PokemonCard = ({ name, image, type }: PokemonCardProps) => (
  <Card sx={{ maxWidth: 200, m: 2 }}>
    <CardContent>
      <Typography variant="h6">{name}</Typography>
      <img src={image} alt={name} width="100%" />
      <Typography variant="body2" color="text.secondary">{type}</Typography>
    </CardContent>
  </Card>
);
