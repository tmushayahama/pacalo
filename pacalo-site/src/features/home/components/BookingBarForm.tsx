import type React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, FormHelperText } from '@mui/material';

type FormData = {
  pickupAddress: string;
  datetime: string;
  serviceType: string;
};

const BookingBar: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      pickupAddress: '',
      datetime: '',
      serviceType: '',
    }
  });

  // == YOUR ORIGINAL SUBMIT FLOW ==
  const onSubmit = (data: FormData) => {
    const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSddx-qvBYH3510NjFk7Gfc-Tyaky0fYodpijBwZKbNW0AkL6g/viewform';
    const params = new URLSearchParams({
      usp: 'pp_url',
      'entry.2135550456': data.pickupAddress, // Pickup Address
      'entry.1303329773': data.datetime,      // DateTime
      'entry.363934079': data.serviceType,    // Service Type
    });
    window.open(`${baseUrl}?${params.toString()}`, '_blank');
  };

  return (
    <div className="bg-green-600 py-5 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-3 items-stretch"
      >
        {/* Pickup Location */}
        <div className="flex-1">
          <Controller
            name="pickupAddress"
            control={control}
            rules={{ required: 'Pickup location is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Pickup Location"
                fullWidth
                size="small"
                error={!!errors.pickupAddress}
                helperText={errors.pickupAddress?.message}
              />
            )}
          />
        </div>

        {/* Pickup Date */}
        <div className="flex-1">
          <Controller
            name="datetime"
            control={control}
            rules={{ required: 'Pickup date is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Pickup Date"
                type="date"
                size="small"
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={!!errors.datetime}
                helperText={errors.datetime?.message}
              />
            )}
          />
        </div>

        {/* Vehicle / Service Type */}
        <div className="flex-1">
          <FormControl fullWidth size="small" error={!!errors.serviceType}>
            <InputLabel>Vehicle</InputLabel>
            <Controller
              name="serviceType"
              control={control}
              rules={{ required: 'Vehicle is required' }}
              render={({ field }) => (
                <Select {...field} label="Vehicle">
                  <MenuItem value="">Choose...</MenuItem>
                  <MenuItem value="Mini Van">Mini Van</MenuItem>
                  <MenuItem value="SUV">SUV</MenuItem>
                  <MenuItem value="Sedan">Sedan</MenuItem>
                </Select>
              )}
            />
            {errors.serviceType && <FormHelperText>{errors.serviceType.message}</FormHelperText>}
          </FormControl>
        </div>

        {/* Submit (BOOK VEHICLE) */}
        <div className="md:self-stretch">
          <Button
            type="submit"
            variant="contained"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md h-[40px] md:h-[56px] w-full md:w-auto px-6 normal-case"
          >
            Book Vehicle
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingBar;
