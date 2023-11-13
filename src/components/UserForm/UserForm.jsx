import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { selectUser } from 'redux/auth/selectors';
import { updateUserParams } from 'redux/auth/operations';
import RadioOption from './RadioOption';
import css from './UserForm.module.css';

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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

  const initialValues = {
    name: user.name || 'Name',
    height: user.height || '150',
    currentWeight: user.currentWeight || '35',
    desiredWeight: user.desiredWeight || '35',
    blood: (user.blood ?? '1').toString() || '1',
    sex: user.sex || 'male',
    levelActivity: (user.levelActivity ?? '1').toString() || '1',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    height: Yup.number()
      .positive('Height must me positive')
      .required('Height is requeired'),
    currentWeight: Yup.number()
      .positive('Weight must be positive')
      .required('Current weight is required'),
    desiredWeight: Yup.number()
      .positive('Weight must be positive')
      .required('Desired weight is required'),
  });

  const handleSumbit = values => {
    const sendData = { ...values };
    dispatch(updateUserParams(sendData));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSumbit}
    >
      {formik => (
        <Form>
          <div className={css.form_container}>
            <div>
              <p className={css.section_title}>Basic info</p>
              <input
                className={css.input}
                name="name"
                type="text"
                placehodler="Your name..."
                defaultValue={user.name}
                style={{ color: 'rgba(239, 237, 232, 0.60)' }}
                readOnly
                disabled
              />
            </div>
            <div>
              <input
                className={css.input}
                type="text"
                name="email"
                defaultValue={user.email}
                style={{ color: 'rgba(239, 237, 232, 0.60)' }}
                readOnly
                disabled
              />
            </div>
          </div>

          <div className={css.wrapper_input_field}>
            <div className={css.wrapper_input}>
              <input
                className={css.input_field}
                type="number"
                name="height"
                id="height"
                placeholder=""
              />
              <label className={css.wrapper_input_label} htmlFor="height">
                Height
              </label>
            </div>
            <div className={css.wrapper}>
              <div className={css.wrapper_input}>
                <input
                  className={css.input_field}
                  type="number"
                  name="currentWeight"
                  id="currentWeight"
                  placehodler=""
                />
                <label
                  htmlFor="currentWeight"
                  className={css.wrapper_input_label}
                >
                  Current Weight
                </label>
              </div>
            </div>
          </div>

          <div className={css.wrapper_input_field}>
            <div className={css.wrapper_input}>
              <input
                type="number"
                className={css.input_field}
                name="desiredWeight"
                id="desiredWeight"
                placeholder=""
              />
              <label
                className={css.wrapper_input_label}
                htmlFor="desiredWeight"
              >
                Desired Weight
              </label>
            </div>
            <>Calendar</>
          </div>

          <div className={css.wrapper_radio}>
            <div style={{ display: 'flex', marginRight: '20px' }}>
              <div style={{ display: 'flex', marginRight: '20px' }}>
                {bloodOptions.map(option => (
                  <RadioOption
                    key={option.id}
                    id={option.id}
                    name="blood"
                    checked={formik.values.blood === option.value}
                    label={option.label}
                    onChange={() => formik.setFieldValue('blood', option.value)}
                  />
                ))}
              </div>
              <div style={{ display: 'flex' }}>
                {sexOptions.map(option => (
                  <RadioOption
                    key={option.id}
                    id={option.id}
                    name="sex"
                    checked={formik.values.sex === option.value}
                    label={option.label}
                    onChange={() => formik.setFieldValue('sex', option.value)}
                  />
                ))}
              </div>
            </div>

            <div сlassName={css.wrapper_level}>
              {levelOptions.map(option => (
                <RadioOption
                  key={option.id}
                  id={option.id}
                  name="levelActivity"
                  checked={formik.values.levelActivity === option.value}
                  label={option.label}
                  onChange={() =>
                    formik.setFieldValue('levelActivity', option.value)
                  }
                />
              ))}
            </div>
          </div>

          <button className={css.button} type="submit">
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;