import styles from './styles.module.scss';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { StyleRegistry } from 'styled-jsx';

const Accordion = styled((props) => (
	<MuiAccordion
		disableGutters
		elevation={0}
		square
		{...props}
	/>
))(({ theme }) => ({
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : '#f5f3f3',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Details({ details }) {
	const [expanded, setExpanded] = useState('panel1');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div className={styles.infos__accordian}>
			<Accordion
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
				className={styles.accordian}>
				<AccordionSummary
					className={styles.accordian__summary}
					aria-controls='panel1d-content'
					id='panel1d-header'>
					<Typography>Details</Typography>
				</AccordionSummary>
				<AccordionDetails className={styles.accordian__details}>
					<span>Description:</span>
					<div className={styles.infos__accordian_grid}>
						<p>{details[0]}</p>
					</div>
				</AccordionDetails>
				<AccordionDetails className={styles.accordian__details}>
					{details.slice(1, details.length).map((item) => (
						<div className={styles.infos__accordian_grid}>
							<span>{item.name}:</span>
							<p>{item.value}</p>
						</div>
					))}
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
