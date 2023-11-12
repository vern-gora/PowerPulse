import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const useForm = () => {
  const dispatch = useDispatch();
  const user = useSelector;

  const bloodOptions = [
    {
      id: '1',
      value: '1',
      label: '1',
    },

    {
      id: '2',
      value: '2',
      label: '2',
    },
    {
      id: '3',
      value: '3',
      label: '3',
    },
    {
      id: '4',
      value: '4',
      label: '4',
    },
  ];
};

const sexOptions = [
  {
    id: 'Male',
    value: 'male',
    label: 'Male',
  },
  {
    id: 'Female',
    value: 'female',
    label: 'Female',
  },
];

const levelOptions = [
  {
    id: 'level-1',
    value: '1',
    label: 'Sedentary lifestyle (little or no physical activity)',
  },
  {
    id: 'level-2',
    value: '2',
    label: 'Light activity (light exercises/sports 1-3 days per week)',
  },
  {
    id: 'level-3',
    value: '3',
    label: 'Moderately active (moderate exercises/sports 3-5 days per week)',
  },
  {
    id: 'level-4',
    value: '4',
    label: 'Very active (intense exercises/sports 6-7 days per week)',
  },
  {
    id: 'level-5',
    value: '5',
    label:
      'Extremely active (very strenuous exercises/sports and physical work)',
  },
];
