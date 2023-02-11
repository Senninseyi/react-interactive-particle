import ControlKit from '@brunoimbrizi/controlkit';
import Stats from 'stats.js';
import React, { useEffect, useState } from 'react';

export default function GUIView() {

  const initControlKit = new ControlKit({
    
  })

  const initialValues = {
    particlesHitArea = false,
    particlesRandom = 2,
    particlesDepth = 4,
    particlesSize = 1.5,

    touchRadius = 0.15,

    range = [0, 1],
    rangeRandom = [1, 10],
    rangeSize = [0, 3],
    rangeDepth = [1, 10],
    rangeRadius = [0, 0.5],

  }

  const [values, setValues] = useState(initialValues)
}
