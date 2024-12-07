import React from "react";
import PropTypes from "prop-types";

function ToggleButton({ onClick, isShowingAll }) {
  return (
    <button onClick={onClick} className="toggle-button">
      {isShowingAll
        ? "Mostrar Tarefas Importantes"
        : "Mostrar Todas as Tarefas"}
    </button>
  );
}

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowingAll: PropTypes.bool.isRequired,
};

export default ToggleButton;
