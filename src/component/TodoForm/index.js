import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleOnChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!onSubmit || value.trim() === "") return;

    let submitValue = {
      title: value,
    };

    onSubmit(submitValue);

    setValue("");
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={value} onChange={handleOnChange} />
    </form>
  );
}

export default TodoForm;
