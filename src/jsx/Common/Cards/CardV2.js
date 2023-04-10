import AdbIcon from '@mui/icons-material/Adb';
import {
    Box,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    Typography
} from "@mui/material";


const Cardv2 = ({
    color,
    number,
    text,
    icon,
    iconSize,
    iconColor = "#000",
    numberSize,
    numberColor,
    bgColor,
    padding,
    margin,
    progress,
    cols = 4
}) => {

    return (
        <Grid xs={12} md={cols} >
            <Card sx={{ cursor: 'pointer', background: bgColor }}>
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                        <Box display="flex" alignItems="center">
                            {number && <Typography variant="h2" >
                                {number}
                            </Typography>}
                        </Box>
                        <AdbIcon sx={{ color: iconColor, height: 40 }} />
                    </Box>

                    <Box>
                        {text && <Typography variant="h3" >
                            text
                        </Typography>}
                        {progress && (
                            <Box mt={1} display="flex" alignItems="center">
                                <Box width="100%" mr={1}>
                                    <LinearProgress sx={{ color: '#ff0000 !important' }} variant="determinate" value={progress} />
                                </Box>
                                <Typography variant="subtitle1" component="p">
                                    {progress}%
                                </Typography>
                            </Box>)}
                    </Box>

                </CardContent>
            </Card>

        </Grid>
    );
}

export default Cardv2;
