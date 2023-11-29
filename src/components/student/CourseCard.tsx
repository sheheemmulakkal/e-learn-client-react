import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

interface IProps {
  image: string;
  price: number;
  name: string;
  category: string;
  level: string;
}
export const CardDefault: React.FC<IProps> = ({
  image,
  price,
  name,
  category,
  level,
}) => {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {level}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {category}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {price}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};
