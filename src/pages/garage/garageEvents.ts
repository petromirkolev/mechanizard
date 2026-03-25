import { bikes } from '../../data/bikes';
import { readAddBikeForm } from '../../utils/forms';

export async function addBike(form: any) {
  const bike = await readAddBikeForm(form);
  const id = String(Math.round(Math.random() * 10));

  bikes.push({ id, ...bike });
}

export function editBike(bikeId: string | undefined, data: any) {
  bikes.find((bike) => {
    if (bike.id === bikeId) {
      bike.make = data.make;
      bike.model = data.model;
      bike.year = data.year;
      bike.odo = data.odo;
    }
    return;
  });
}

export function logBikeOdo(bikeId: string | undefined, odo: number) {
  bikes.find((bike) => {
    if (bike.id === bikeId) {
      bike.odo = odo;
    }
    return;
  });
}

export function deleteBike(bikeId: string | undefined) {
  const index = bikes.findIndex((bike) => bike.id === bikeId);
  bikes.splice(index, 1);
}
