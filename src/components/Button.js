import React from "react";
import PropTypes from "prop-types";

function ToggleMode({ onClick, isShowingAll }) {
  return (
    <button onClick={onClick} className="toggle-button">
      {isShowingAll
        ? "Mostrar Tarefas Importantes"
        : "Mostrar Todas as Tarefas"}
    </button>
  );
}

ToggleMode.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowingAll: PropTypes.bool.isRequired,
};

export default ToggleMode;
