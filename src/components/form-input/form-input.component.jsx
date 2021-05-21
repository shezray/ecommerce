import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps}) => (
	<div className="group">
		<input className="form-input" onChange={handleChange}{...otherProps} />
		{
			label ?
			(<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
			{label}
			</label>)
			: null //if there is a label we render a label 
			//component otherwise we render nothing.
		}
	</div>

	)

export default FormInput;