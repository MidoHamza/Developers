import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import remove from '../../img/remove.svg';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <Fragment>
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td className="hide-sm">{edu.degree}</td>
        <td>
          {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
        </td>
      </tr>
      <div className="my-2">
        <button
          onClick={() => deleteEducation(edu._id)}
          className="btn btn-danger"
        >
          <img src={remove} alt="X" className="svgiconsm" /> Delete Education
        </button>
      </div>
    </Fragment>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
