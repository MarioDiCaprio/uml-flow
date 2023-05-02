import React from "react";
import {useTheme} from "@mui/material";


interface LogoProps {
    width: string;
}

export const Logo: React.FC<LogoProps> = ({ width }) => {
    const theme = useTheme();

    return (
        <svg viewBox="0 0 200 200" width={width} fillRule="evenodd">

            <path
                style={{ fill: theme.palette.primary.main }}
                d="M173.04194,47.89048l-64.81613,-37.40661l-0.09887,0.17134c0.17,-0.67182 0.26016,-1.37756 0.26016,-2.10682c0,-4.67742 -3.70968,-8.54839 -8.3871,-8.54839c-4.67742,0 -8.3871,3.70968 -8.3871,8.3871c0,0.79356 0.10677,1.56392 0.30694,2.2961l-0.14565,-0.19932l-64.33726,37.57032c-1.52435,-1.67548 -3.70339,-2.73161 -6.14661,-2.73161c-4.67742,0 -8.3871,3.87097 -8.3871,8.54839c0,3.89323 2.57,7.22774 6.12903,8.23645v75.14c-3.55903,1.00871 -6.12903,4.34323 -6.12903,8.23645c0,4.67742 3.70968,8.54839 8.3871,8.54839c2.46081,0 4.65355,-1.07129 6.17952,-2.7679l-0.05048,0.18726l64.41968,38.02258c-0.1479,0.6371 -0.22613,1.29839 -0.22613,1.97742c0,4.67742 3.70968,8.54839 8.3871,8.54839c4.67742,0 8.3871,-3.87097 8.3871,-8.54839c0,-0.57581 -0.05613,-1.13871 -0.16339,-1.68387l64.79403,-38.00452c1.48871,1.405 3.48226,2.26903 5.69194,2.26903c4.67742,0 8.3871,-3.87097 8.3871,-8.54839c0,-3.83419 -2.49194,-7.12645 -5.96774,-8.18887v-74.91258c3.47581,-1.06242 5.96774,-4.35468 5.96774,-8.18887c0,-4.67742 -3.70968,-8.54839 -8.3871,-8.54839c-2.19677,0 -4.18065,0.85435 -5.66774,2.24532zM137.89597,75.1571l32.5879,-18.86677l0.17097,0.28726c-0.21613,-0.75839 -0.33226,-1.55871 -0.33226,-2.38403c0,-0.72 0.08871,-1.42081 0.25323,-2.09145l-0.09194,0.15597l-64.67742,-37.58065l0.05661,-0.09806c-0.95226,0.92532 -2.12758,1.6229 -3.44371,2.01048v37.88516zM94.52032,14.86065c0.87758,0.77339 1.91565,1.36532 3.06032,1.71532v37.89468l-35.22516,20.47274l-32.85387,-19.32581c0.11532,-0.56484 0.17581,-1.14903 0.17581,-1.74661c0,-0.55258 -0.05177,-1.09387 -0.15081,-1.61887zM63.49855,75.73161l-2.36952,4.1071l-33.87097,-19.83871l0.01677,-0.13903c-0.93468,0.97177 -2.09677,1.71839 -3.40387,2.14774v75.33742c3.39065,1.11371 5.80645,4.36323 5.80645,8.13774c0,0.77919 -0.1029,1.53581 -0.29613,2.25613l64.84016,37.51484c0.93694,-0.90968 2.08161,-1.60161 3.35919,-1.99194v-37.77903l-37.90323,-22.09677v-44.35484l37.90323,22.41935v43.3871h4.83871v-43.3871l37.90274,-22.09645l-1.12855,0.64484l-2.41371,-4.18387l-36.77984,21.44194zM102.41935,183.2629v-37.61774l37.90323,-22.25806v-44.03226l32.74194,-18.70968l-0.17581,-0.29532c0.94516,0.92952 2.10484,1.63629 3.40161,2.03258v74.91258c-3.47581,1.06242 -5.96774,4.35468 -5.96774,8.18887c0,0.78516 0.10484,1.54758 0.3,2.27274l-0.13871,-0.17597l-64.60129,37.77742c-0.95581,-0.96129 -2.13806,-1.69032 -3.46323,-2.09516z"
            />

        </svg>
    );
}

export default Logo;