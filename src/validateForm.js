const validateForm = (values) => {
  let errors = {};

  if (!values.title.trim()) {
    errors.title = "Title required";
  }

  if (!values.year) {
    errors.year = "Year is required";
  } else if (typeof values.year !== "number") {
    errors.year = "Year must be a number";
  }

  if (!values.type.trim()) {
    errors.type = "Type of movie is required";
  }

  if (!values.image) {
    errors.image = "Image is required";
  }
  return errors;
};

export default validateForm;
