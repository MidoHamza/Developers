import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import remove from '../../img/remove.svg';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <Fragment>
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td className="hide-sm">{exp.title}</td>
        <td>
          {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}
        </td>
      </tr>
      <div className="my-2">
        <button
          onClick={() => deleteExperience(exp._id)}
          className="btn btn-danger"
        >
          <img src={remove} alt="X" className="svgiconsm" /> Delete Experience
        </button>
      </div>
    </Fragment>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
