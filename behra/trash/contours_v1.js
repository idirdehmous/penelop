
const LAYER_PALETTES = {
  
'clst': [
    { val: -10.0,  r: 0,   g: 0,   b: 131, a: 200 }, 
    { val: -7.67,  r: 0,   g: 0,   b: 255, a: 200 }, 
    { val: -5.33,  r: 0,   g: 100, b: 255, a: 200 },
    { val: -3.0,   r: 0,   g: 200, b: 255, a: 200 },
    { val: -0.67,  r: 0,   g: 255, b: 150, a: 200 },
    { val: 1.67,   r: 0,   g: 255, b: 0,   a: 200 },  
    { val: 4.0,    r: 100, g: 255, b: 0,   a: 200 }, 
    { val: 6.33,   r: 200, g: 255, b: 0,   a: 200 },   
    { val: 8.67,   r: 255, g: 255, b: 0,   a: 200 },  
    { val: 11.0,   r: 255, g: 200, b: 0,   a: 200 },  
    { val: 13.33,  r: 255, g: 140, b: 0,   a: 200 },   
    { val: 15.67,  r: 255, g: 60,  b: 0,   a: 200 },   
    { val: 18.0,   r: 255, g: 0,   b: 0,   a: 200 },  
    { val: 20.33,  r: 200, g: 0,   b: 0,   a: 200 }, 
    { val: 22.67,  r: 130, g: 0,   b: 0,   a: 200 },  
    { val: 25.0,   r: 80,  g: 0,   b: 0,   a: 200 }  
],
'sst': [
    { val: -10.0,  r: 0,   g: 0,   b: 131, a: 200 }, 
    { val: -7.67,  r: 0,   g: 0,   b: 255, a: 200 }, 
    { val: -5.33,  r: 0,   g: 100, b: 255, a: 200 },
    { val: -3.0,   r: 0,   g: 200, b: 255, a: 200 },
    { val: -0.67,  r: 0,   g: 255, b: 150, a: 200 },
    { val: 1.67,   r: 0,   g: 255, b: 0,   a: 200 },  
    { val: 4.0,    r: 100, g: 255, b: 0,   a: 200 }, 
    { val: 6.33,   r: 200, g: 255, b: 0,   a: 200 },   
    { val: 8.67,   r: 255, g: 255, b: 0,   a: 200 },  
    { val: 11.0,   r: 255, g: 200, b: 0,   a: 200 },  
    { val: 13.33,  r: 255, g: 140, b: 0,   a: 200 },   
    { val: 15.67,  r: 255, g: 60,  b: 0,   a: 200 },   
    { val: 18.0,   r: 255, g: 0,   b: 0,   a: 200 },  
    { val: 20.33,  r: 200, g: 0,   b: 0,   a: 200 }, 
    { val: 22.67,  r: 130, g: 0,   b: 0,   a: 200 },  
    { val: 25.0,   r: 80,  g: 0,   b: 0,   a: 200 }  
],
  'pcp': [
        { val: 0.0,   r: 255, g: 255, b: 255, a: 0   },
        { val: 0.01,   r: 255, g: 255, b: 255, a: 0   }, 
        { val: 0.05,   r: 255, g: 255, b: 255, a: 0   }, 
        { val: 0.1,   r: 161, g: 215, b: 236, a: 10 }, 
        { val: 1.0,   r: 161, g: 215, b: 236, a: 100 },
        { val: 2.5,   r: 100, g: 180, b: 220, a: 100 }, 
        { val: 5.0,   r: 45,  g: 135, b: 200, a: 180 }, 
        { val: 10.0,  r: 30,  g: 90,  b: 180, a: 200 }, 
        { val: 15.0,  r: 35,  g: 140, b: 60,  a: 200 }, 
        { val: 20.0,  r: 90,  g: 175, b: 50,  a: 200 }, 
        { val: 30.0,  r: 220, g: 220, b: 50,  a: 200 }, 
        { val: 40.0,  r: 240, g: 150, b: 30,  a: 200 }, 
        { val: 50.0,  r: 220, g: 50,  b: 40,  a: 200 }, 
        { val: 65.0,  r: 170, g: 25,  b: 35,  a: 200 }, 
        { val: 80.0,  r: 140, g: 40,  b: 130, a: 200 }, 
        { val: 100.0, r: 200, g: 70,  b: 190, a: 220 }  
    ], 


    //  Cloud cover ( 0.0 to 1.0 x100)
    'hcc':  [
        { val: 0.,  r: 255, g: 255, b: 255, a: 0   },
        { val: 0.5,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 1.,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 5.,  r: 255, g: 255, b: 255, a: 10   }, 
        { val: 10.,  r: 255, g: 255, b: 255, a: 20  }, 
        { val: 20.,  r: 255, g: 255, b: 255, a: 45  }, 
        { val: 30.,  r: 245, g: 245, b: 250, a: 70  }, 
        { val: 40.,  r: 235, g: 235, b: 240, a: 95  },
        { val: 50.,  r: 225, g: 225, b: 230, a: 120 }, 
        { val: 60.,  r: 215, g: 215, b: 220, a: 140 },
        { val: 70.,  r: 200, g: 200, b: 205, a: 150 }, 
        { val: 80.,  r: 185, g: 185, b: 190, a: 160 },
        { val: 90.,  r: 170, g: 170, b: 175, a: 200 }, 
        { val: 100,  r: 150, g: 150, b: 155, a: 200 } 
    ] , 
    
      'lcc':  [
        { val: 0.,  r: 255, g: 255, b: 255, a: 0   },
        { val: 0.5,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 1.,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 5.,  r: 255, g: 255, b: 255, a: 10   }, 
        { val: 10.,  r: 255, g: 255, b: 255, a: 20  }, 
        { val: 20.,  r: 255, g: 255, b: 255, a: 45  }, 
        { val: 30.,  r: 245, g: 245, b: 250, a: 70  }, 
        { val: 40.,  r: 235, g: 235, b: 240, a: 95  },
        { val: 50.,  r: 225, g: 225, b: 230, a: 120 }, 
        { val: 60.,  r: 215, g: 215, b: 220, a: 140 },
        { val: 70.,  r: 200, g: 200, b: 205, a: 150 }, 
        { val: 80.,  r: 185, g: 185, b: 190, a: 160 },
        { val: 90.,  r: 170, g: 170, b: 175, a: 200 }, 
        { val: 100,  r: 150, g: 150, b: 155, a: 200 } 
    ] , 
          'mcc': [
        { val: 0.,  r: 255, g: 255, b: 255, a: 0   },
        { val: 0.5,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 1.,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 5.,  r: 255, g: 255, b: 255, a: 10   }, 
        { val: 10.,  r: 255, g: 255, b: 255, a: 20  }, 
        { val: 20.,  r: 255, g: 255, b: 255, a: 45  }, 
        { val: 30.,  r: 245, g: 245, b: 250, a: 70  }, 
        { val: 40.,  r: 235, g: 235, b: 240, a: 95  },
        { val: 50.,  r: 225, g: 225, b: 230, a: 120 }, 
        { val: 60.,  r: 215, g: 215, b: 220, a: 140 },
        { val: 70.,  r: 200, g: 200, b: 205, a: 150 }, 
        { val: 80.,  r: 185, g: 185, b: 190, a: 160 },
        { val: 90.,  r: 170, g: 170, b: 175, a: 200 }, 
        { val: 100,  r: 150, g: 150, b: 155, a: 200 } 
    ] , 
  'tcc': [
        { val: 0.,  r: 255, g: 255, b: 255, a: 0   },
        { val: 0.5,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 1.,  r: 255, g: 255, b: 255, a: 5   }, 
        { val: 5.,  r: 255, g: 255, b: 255, a: 10   }, 
        { val: 10.,  r: 255, g: 255, b: 255, a: 20  }, 
        { val: 20.,  r: 255, g: 255, b: 255, a: 45  }, 
        { val: 30.,  r: 245, g: 245, b: 250, a: 70  }, 
        { val: 40.,  r: 235, g: 235, b: 240, a: 95  },
        { val: 50.,  r: 225, g: 225, b: 230, a: 120 }, 
        { val: 60.,  r: 215, g: 215, b: 220, a: 140 },
        { val: 70.,  r: 200, g: 200, b: 205, a: 150 }, 
        { val: 80.,  r: 185, g: 185, b: 190, a: 160 },
        { val: 90.,  r: 170, g: 170, b: 175, a: 200 }, 
        { val: 100,  r: 150, g: 150, b: 155, a: 200 } 
    ] , 
    
 
 'sfcgeo': [
    { val:   0, r:   0, g:   0, b: 131, a: 200 }, // Bleu foncé
    { val:  100, r:   0, g:   0, b: 255, a: 200 }, // Bleu
    { val:  200, r:   0, g: 100, b: 255, a: 200 }, // Bleu clair
    { val:  300, r:   0, g: 200, b: 255, a: 200 }, // Cyan
    { val:  400, r:   0, g: 255, b: 150, a: 200 }, // Vert d'eau
    { val:  500, r:   0, g: 255, b:   0, a: 200 }, // Vert
    { val:  600, r: 100, g: 255, b:   0, a: 200 }, // Vert-jaune
    { val:  700, r: 200, g: 255, b:   0, a: 200 }, // Jaune-vert
    { val:  800, r: 255, g: 255, b:   0, a: 200 }, // Jaune
    { val:  900, r: 255, g: 200, b:   0, a: 200 }, // Jaune-orange
    { val: 1000, r: 255, g: 140, b:   0, a: 200 }, // Orange
    { val: 1100, r: 255, g:  60, b:   0, a: 200 }, // Orange foncé
    { val: 1200, r: 255, g:   0, b:   0, a: 200 }, // Rouge
    { val: 1300, r: 200, g:   0, b:   0, a: 200 }, // Rouge sombre
    { val: 1400, r: 130, g:   0, b:   0, a: 200 }, // Brun rouge
    { val: 1500, r:  80, g:   0, b:   0, a: 200 }  // Brun foncé
] ,    
 
'clsh': [
        { val: 0.0,   r: 139, g: 69,  b: 19,  a: 180 },
        { val: 10.0,  r: 160, g: 82,  b: 45,  a: 180 }, 
        { val: 20.0,  r: 210, g: 105, b: 30,  a: 180 }, 
        { val: 30.0,  r: 244, g: 164, b: 96,  a: 180 }, 
        { val: 40.0,  r: 245, g: 222, b: 179, a: 150 }, 
        { val: 50.0,  r: 230, g: 245, b: 230, a: 150 },
        { val: 60.0,  r: 174, g: 213, b: 129, a: 180 }, 
        { val: 70.0,  r: 100, g: 180, b: 100, a: 180 },
        { val: 80.0,  r: 50,  g: 150, b: 150, a: 200 }, 
        { val: 85.0,  r: 45,  g: 135, b: 200, a: 200 }, 
        { val: 90.0,  r: 30,  g: 90,  b: 180, a: 200 }, 
        { val: 95.0,  r: 20,  g: 50,  b: 140, a: 220 }, 
        { val: 100.0, r: 74,  g: 20,  b: 140, a: 220 } 
    ], 

'acrr': [
        { val: 0.0,   r: 255, g: 255, b: 255, a: 0   }, 
        { val: 1.0,   r: 102, g: 204, b: 255, a: 140 }, 
        { val: 2.0,   r: 0,   g: 153, b: 255, a: 170 }, 
        { val: 5.0,   r: 0,   g: 102, b: 204, a: 190 }, 
        { val: 10.0,  r: 0,   g: 0,   b: 255, a: 200 }, 
        { val: 15.0,  r: 0,   g: 200, b: 0,   a: 200 }, 
        { val: 20.0,  r: 0,   g: 150, b: 0,   a: 200 }, 
        { val: 30.0,  r: 255, g: 255, b: 0,   a: 200 }, 
        { val: 40.0,  r: 255, g: 153, b: 0,   a: 200 }, 
        { val: 50.0,  r: 255, g: 0,   b: 0,   a: 200 }, 
        { val: 65.0,  r: 204, g: 0,   b: 0,   a: 200 },
        { val: 80.0,  r: 153, g: 0,   b: 153, a: 220 }, 
        { val: 100.0, r: 255, g: 255, b: 255, a: 240 }  
    ] ,
'cape': [
    { val:    0, r:255, g:255, b:255, a:0   },

    { val:    2, r:245, g:255, b:245, a:60  },
    { val:    5, r:220, g:255, b:220, a:90  },
    { val:   10, r:180, g:255, b:180, a:120 },
    { val:   20, r:100, g:255, b:100, a:150 },
    { val:   35, r:  0, g:220, b:  0, a:180 },

    { val:   50, r:180, g:255, b:  0, a:190 },
    { val:   75, r:255, g:255, b:  0, a:200 },
    { val:  100, r:255, g:210, b:  0, a:205 },
    { val:  150, r:255, g:170, b:  0, a:210 },

    { val:  250, r:255, g:100, b:  0, a:220 },
    { val:  500, r:255, g:  0, b:  0, a:225 },

    { val: 1000, r:180, g:  0, b:  0, a:230 },
    { val: 2000, r:180, g:  0, b:180, a:235 },
    { val: 3000, r:255, g:255, b:255, a:240 }
],
'pblh': [
    { val:    0, r:255, g:255, b:255, a:0   },

    { val:  100, r:180, g:220, b:255, a:140 },
    { val:  300, r:120, g:190, b:255, a:170 },
    { val:  600, r: 70, g:140, b:255, a:190 },

    { val: 1000, r:  0, g:220, b:120, a:190 },
    { val: 1500, r:  0, g:180, b:  0, a:200 },

    { val: 2500, r:255, g:255, b:  0, a:205 },
    { val: 4000, r:255, g:170, b:  0, a:210 },

    { val: 6000, r:255, g: 70, b:  0, a:220 },
    { val: 8000, r:180, g:  0, b:  0, a:230 }
], 
'clsw': [
    { val:  0, r:255, g:255, b:255, a:0   },

    { val:  1, r:200, g:255, b:255, a:140 },
    { val:  3, r:120, g:220, b:255, a:170 },
    { val:  5, r: 70, g:170, b:255, a:180 },

    { val:  8, r:  0, g:220, b:120, a:190 },
    { val: 12, r:  0, g:180, b:  0, a:195 },

    { val: 15, r:255, g:255, b:  0, a:200 },
    { val: 18, r:255, g:180, b:  0, a:205 },

    { val: 20, r:255, g:100, b:  0, a:210 },
    { val: 22, r:255, g:  0, b:  0, a:220 },

    { val: 25, r:180, g:  0, b:180, a:230 }
],
'tsurf': [
    { val: -10.0,  r: 0,   g: 0,   b: 131, a: 200 }, 
    { val: -7.67,  r: 0,   g: 0,   b: 255, a: 200 }, 
    { val: -5.33,  r: 0,   g: 100, b: 255, a: 200 },
    { val: -3.0,   r: 0,   g: 200, b: 255, a: 200 },
    { val: -0.67,  r: 0,   g: 255, b: 150, a: 200 },
    { val: 1.67,   r: 0,   g: 255, b: 0,   a: 200 },  
    { val: 4.0,    r: 100, g: 255, b: 0,   a: 200 }, 
    { val: 6.33,   r: 200, g: 255, b: 0,   a: 200 },   
    { val: 8.67,   r: 255, g: 255, b: 0,   a: 200 },  
    { val: 11.0,   r: 255, g: 200, b: 0,   a: 200 },  
    { val: 13.33,  r: 255, g: 140, b: 0,   a: 200 },   
    { val: 15.67,  r: 255, g: 60,  b: 0,   a: 200 },   
    { val: 18.0,   r: 255, g: 0,   b: 0,   a: 200 },  
    { val: 20.33,  r: 200, g: 0,   b: 0,   a: 200 }, 
    { val: 22.67,  r: 130, g: 0,   b: 0,   a: 200 },  
    { val: 25.0,   r: 80,  g: 0,   b: 0,   a: 200 }  
],
'radsol': [
    { val: -400.0,  r: 0,   g: 253, b: 253, a: 200 },
    { val: -361.9,  r: 8,   g: 222, b: 253, a: 200 },
    { val: -323.81, r: 16,  g: 189, b: 253, a: 200 },
    { val: -285.71, r: 24,  g: 157, b: 253, a: 200 },
    { val: -247.62, r: 32,  g: 125, b: 253, a: 200 },
    { val: -209.52, r: 40,  g: 93,  b: 253, a: 200 },
    { val: -171.43, r: 48,  g: 60,  b: 253, a: 200 },
    { val: -133.33, r: 85,  g: 85,  b: 253, a: 200 },
    { val: -95.24,  r: 133, g: 133, b: 253, a: 200 },
    { val: -57.14,  r: 181, g: 181, b: 253, a: 200 },
    { val: -19.05,  r: 230, g: 230, b: 253, a: 200 },
    { val: 19.05,   r: 253, g: 230, b: 230, a: 200 },
    { val: 57.14,   r: 253, g: 181, b: 181, a: 200 },
    { val: 95.24,   r: 253, g: 133, b: 133, a: 200 },
    { val: 133.33,  r: 253, g: 85,  b: 85,  a: 200 },
    { val: 171.43,  r: 253, g: 60,  b: 48,  a: 200 },
    { val: 209.52,  r: 253, g: 93,  b: 40,  a: 200 },
    { val: 247.62,  r: 253, g: 125, b: 32,  a: 200 },
    { val: 285.71,  r: 253, g: 157, b: 24,  a: 200 },
    { val: 323.81,  r: 253, g: 189, b: 16,  a: 200 },
    { val: 361.9,   r: 253, g: 224, b: 8,   a: 200 },
    { val: 400.0,   r: 253, g: 253, b: 0,   a: 200 }
] ,
'radter': [
    { val: -400.0,  r: 0,   g: 253, b: 253, a: 200 },
    { val: -361.9,  r: 8,   g: 222, b: 253, a: 200 },
    { val: -323.81, r: 16,  g: 189, b: 253, a: 200 },
    { val: -285.71, r: 24,  g: 157, b: 253, a: 200 },
    { val: -247.62, r: 32,  g: 125, b: 253, a: 200 },
    { val: -209.52, r: 40,  g: 93,  b: 253, a: 200 },
    { val: -171.43, r: 48,  g: 60,  b: 253, a: 200 },
    { val: -133.33, r: 85,  g: 85,  b: 253, a: 200 },
    { val: -95.24,  r: 133, g: 133, b: 253, a: 200 },
    { val: -57.14,  r: 181, g: 181, b: 253, a: 200 },
    { val: -19.05,  r: 230, g: 230, b: 253, a: 200 },
    { val: 19.05,   r: 253, g: 230, b: 230, a: 200 },
    { val: 57.14,   r: 253, g: 181, b: 181, a: 200 },
    { val: 95.24,   r: 253, g: 133, b: 133, a: 200 },
    { val: 133.33,  r: 253, g: 85,  b: 85,  a: 200 },
    { val: 171.43,  r: 253, g: 60,  b: 48,  a: 200 },
    { val: 209.52,  r: 253, g: 93,  b: 40,  a: 200 },
    { val: 247.62,  r: 253, g: 125, b: 32,  a: 200 },
    { val: 285.71,  r: 253, g: 157, b: 24,  a: 200 },
    { val: 323.81,  r: 253, g: 189, b: 16,  a: 200 },
    { val: 361.9,   r: 253, g: 224, b: 8,   a: 200 },
    { val: 400.0,   r: 253, g: 253, b: 0,   a: 200 }
],
'soilt': [
    { val: -10.0,  r: 0,   g: 0,   b: 131, a: 200 }, 
    { val: -7.67,  r: 0,   g: 0,   b: 255, a: 200 }, 
    { val: -5.33,  r: 0,   g: 100, b: 255, a: 200 },
    { val: -3.0,   r: 0,   g: 200, b: 255, a: 200 },
    { val: -0.67,  r: 0,   g: 255, b: 150, a: 200 },
    { val: 1.67,   r: 0,   g: 255, b: 0,   a: 200 },  
    { val: 4.0,    r: 100, g: 255, b: 0,   a: 200 }, 
    { val: 6.33,   r: 200, g: 255, b: 0,   a: 200 },   
    { val: 8.67,   r: 255, g: 255, b: 0,   a: 200 },  
    { val: 11.0,   r: 255, g: 200, b: 0,   a: 200 },  
    { val: 13.33,  r: 255, g: 140, b: 0,   a: 200 },   
    { val: 15.67,  r: 255, g: 60,  b: 0,   a: 200 },   
    { val: 18.0,   r: 255, g: 0,   b: 0,   a: 200 },  
    { val: 20.33,  r: 200, g: 0,   b: 0,   a: 200 }, 
    { val: 22.67,  r: 130, g: 0,   b: 0,   a: 200 },  
    { val: 25.0,   r: 80,  g: 0,   b: 0,   a: 200 }  
],
'mslp': [
    // --- TRÈS BASSES PRESSIONS (Tempêtes / Cyclones) : Violet / Magenta ---
    { val: 950,  r: 150, g: 0,   b: 150, a: 220 },
    { val: 970,  r: 200, g: 0,   b: 200, a: 200 },

    // --- DÉPRESSIONS MARQUÉES : Bleu foncé à Bleu clair ---
    { val: 985,  r: 25,  g: 25,  b: 112, a: 190 }, // Midnight Blue
    { val: 995,  r: 30,  g: 144, b: 255, a: 170 }, // Dodger Blue
    { val: 1000, r: 135, g: 206, b: 250, a: 150 }, // Light Sky Blue

    // --- ZONE DE TRANSITION (Pression Neutre) : Vert / Jaune-Vert ---
    { val: 1008, r: 144, g: 238, b: 144, a: 130 }, // Light Green
    { val: 1013, r: 245, g: 245, b: 220, a: 100 }, // Beige / Neutre (Pression standard)
    { val: 1018, r: 255, g: 255, b: 153, a: 140 }, // Jaune clair

    // --- HAUTES PRESSIONS (Anticyclones) : Orange à Rouge ---
    { val: 1025, r: 255, g: 140, b: 0,   a: 180 }, // Dark Orange
    { val: 1032, r: 220, g: 20,  b: 60,  a: 210 }, // Crimson
    { val: 1040, r: 139, g: 0,   b: 0,   a: 230 }  // Dark Red
]

}; 

// Global vars  
let pixiOverlay = null;
let currentGeoRaster = null;
let georaster; 
let isRasterLoading; 

let currentWidth = null;
let currentHeight = null; 
//let currentType = null  ; 

// Extent of ALARO 1.3Km (ESPG 4326)
const ll_xmin = -1.051405;
const ll_ymin =  47.59286 - 0.2 ;    // to be substracted in R 
const ll_xmax =  10.154072;
const ll_ymax =  54.277354 -0.2 ; 


// Substract 0.2 degrees --> corresponds to the starting  of the raster (TopLeft  )
/*const ll_xmin = -1.051405;
const ll_ymin =  47.39286;
const ll_xmax =  10.154072;
const ll_ymax =  54.077354; */


// Wind variables for animation 
let windGrid = { uData: null, vData: null, header: null };
let particleContainer = null;
let isWindInitialized = false;

// Pre-load N Layers and save in cache 
 let N_PRE_LOADS =  1  ; 

// Geoserver workspaces 
WORKSPACE = "behra_surf"  ; 

// For opacity   
window.renderSettings = {
    opacity: 1.0
};


// Overlays 
const overlays = {
    mslp   : null,
    cities : null,
    borders: null
};


// Init  popup 
const pop_tooltip = L.popup({
    closeButton: false,
    autoPan: false,
    className: 'custom-tooltip'
});


// Init the PixiJs containers for textures 
const textureCache = {};
const globalContainer = new PIXI.Container();
const globalSprite    = new PIXI.Sprite(); 
globalContainer.addChild(globalSprite);

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
PIXI.settings.ROUND_PIXELS = false; 

/*const fxaaFilter = new PIXI.filters.FXAAFilter();
globalSprite.filters = [fxaaFilter];*/



// baseMap Leaflet
const southWest_corner  = L.latLng([38.5, 2.5]);
const northEast_corner  = L.latLng([55.5,  8.5]);
const map_extent        = L.latLngBounds(southWest_corner, northEast_corner);

// init the map object  
const map = L.map('map', { crs: L.CRS.EPSG3857 }).setView([51.0, 4.75], 6);


// Use two different map providers 
const osm1 = L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
    {
        minZoom: 6,
        maxZoom: 12,
        opacity: 0.8,
        attribution: '© OpenStreetMap'
    }
);

var osm2  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 6,
	maxZoom: 12,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


// Basemap  
let activeBasemap = osm1;
activeBasemap.addTo(map);

const basemapsConfig = [
{  id: "osm_dark", label: "CartoDB_DarkMatter", category: "Basemaps",  icon: "map"     ,layer: osm1 },
{  id: "osm_topo", label: "OpenStreetMap_CH"  , category: "Basemaps",  icon: "mountain",layer: osm2 }
] ; 

// Layers config  
const 	layersConfig = [
{    id: "behra_surf__clst"    , name : "behra_surf__clst"    ,label: "Temperature"              ,    category: "Surface"        ,    icon: "thermometer", group: L.layerGroup()},
{    id: "behra_surf__clsh"    , name : "behra_surf__clsh"    ,label: "Humidity"                 ,    category: "Surface"        ,    icon: "droplets",    group: L.layerGroup()},
{    id: "behra_surf__clsw"    , name : "behra_surf__clsw"    ,label: "Wind speed"               ,    category: "surface"        ,    icon: "bx-wind",     group: L.layerGroup()},
{    id: "behra_surf__hcc"     , name : "behra_surf__hcc"     ,label: "Heigh cloud cover"        ,    category: "surface"        ,    icon: "cloudy",      group: L.layerGroup()},
{    id: "behra_surf__mcc"     , name : "behra_surf__mcc"     ,label: "Mid-level cloud cover"    ,    category: "surface"        ,    icon: "cloudy",      group: L.layerGroup()},
{    id: "behra_surf__lcc"     , name : "behra_surf__lcc"     ,label: "Low level cloud cover"    ,    category: "surface"        ,    icon: "cloudy",      group: L.layerGroup()},
{    id: "behra_surf__tcc"     , name : "behra_surf__tcc"     ,label: "Tot level cloud cover"    ,    category: "surface"        ,    icon: "cloudy",      group: L.layerGroup()},
{    id: "behra_surf__sst"     , name : "behra_surf__sst"     ,label: "Sea surface temperature"  ,    category: "surface"        ,    icon: "tehrmometer", group: L.layerGroup()},
{    id: "behra_surf__tsurf"   , name : "behra_surf__tsurf"   ,label: "Surface temperature"      ,    category: "surface"        ,    icon: "tehrmometer", group: L.layerGroup()},
{    id: "behra_surf__soilt"   , name : "behra_surf__soilt"   ,label: "Soil temperature"         ,    category: "surface"        ,    icon: "tehrmometer", group: L.layerGroup()},
{    id: "behra_surf__cape"    , name : "behra_surf__cape"    ,label: "Surface CAPE"             ,    category: "surface"        ,    icon: "bx-wind",     group: L.layerGroup()},
{    id: "behra_surf__pblh"    , name : "behra_surf__pblh"    ,label: "Height of boundary layer" ,    category: "surface"        ,    icon: "bx-wind",     group: L.layerGroup()},
{    id: "behra_surf__sfcgeo"  , name : "behra_surf__sfcgeo" ,label: "Surface geopotentiel"          ,    category: "surface"   ,    icon: "cloud-rain",  group: L.layerGroup()},
{    id: "behra_surf__radsol"  , name : "behra_surf__radsol"  ,label: "Surface net solar radiation"   ,    category: "surface"   ,    icon: "sun",  group: L.layerGroup()},
{    id: "behra_surf__radter"  , name : "behra_surf__radter"  ,label: "Surface net thermal radiation" ,    category: "surface"   ,    icon: "sun",  group: L.layerGroup()},
{    id: "behra_surf__mslp"    , name : "behra_surf__mslp"  ,label: "mslp" ,    category: "surface"   ,    icon: "sun",  group: L.layerGroup()},

{    id: "behra__temp_950"     , name : "behra__temp_950", label: "950 hPa",    category: "Temperature",    icon: "thermometer",    group: L.layerGroup()},
{    id: "behra__temp_900"     , name : "behra__temp_900", label: "900 hPa",    category: "Temperature",    icon: "thermometer",    group: L.layerGroup()},
{    id: "behra__hum_950"      , name : "behra__hum_950" , label: "950 hPa",    category: "Humidity",       icon: "droplets",       group: L.layerGroup()},
{    id: "behra__hum_900"      , name : "behra__hum_900" , label: "900 hPa",    category: "Humidity",       icon: "droplets",       group: L.layerGroup()},
{    id: "behra__acrr"         , name : "behra__acrr"    , label: "Radar rain", category: "Radar"   ,       icon: "cloud-rain",     group: L.layerGroup()},
];

// Side bar layers 
const sidebarConfig = {
    basemaps: basemapsConfig,
    layers: layersConfig
};
// Set color palette 
function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}	
function setColors(raster, canvas, imageData, layerType) {
    const data = imageData.data;
    const canvasW = canvas.width;
    const canvasH = canvas.height;
    const rasterW = currentWidth;  
    const rasterH = currentHeight; 
   // Get the right color palette 
    const thresholds = LAYER_PALETTES[layerType];
//console.log(layerType)  ;     
//console.log("color pal  ----->",   LAYER_PALETTES[layerType])  ; 
    for (let y = 0; y < canvasH; y++) {
        for (let x = 0; x < canvasW; x++) {
            
            // Bilinear  Interpolation 
            const gx = (x / (canvasW - 1)) * (rasterW - 1);
            const gy = (y / (canvasH - 1)) * (rasterH - 1);
            const gX0 = Math.floor(gx);
            const gY0 = Math.floor(gy);
            const gX1 = Math.min(gX0 + 1, rasterW - 1);
            const gY1 = Math.min(gY0 + 1, rasterH - 1);
            const tx = gx - gX0;
            const ty = gy - gY0;
            
            const v00 = raster[gY0][gX0];
            const v10 = raster[gY0][gX1];
            const v01 = raster[gY1][gX0];
            const v11 = raster[gY1][gX1];
            
            const val = (1 - tx) * (1 - ty) * v00 + tx * (1 - ty) * v10 + (1 - tx) * ty * v01 + tx * ty * v11;

            // Color to interpolate 
            let r = 38, g = 0, b = 0, a = 0;

                if (val <= thresholds[0].val) {
                    // Less than the 1 st threshold 
                    r = thresholds[0].r; g = thresholds[0].g; b = thresholds[0].b; a = thresholds[0].a;
                } else if (val >= thresholds[thresholds.length - 1].val) {
                    // Greater than the 2nd threshhold 
                    r = 38; g = 0; b = 0; a = 0;
                } else {
                    // interval of interpolation  
                    for (let i = 0; i < thresholds.length - 1; i++) {
                        if (val >= thresholds[i].val && val < thresholds[i+1].val) {
                            const c1 = thresholds[i];
                            const c2 = thresholds[i+1];
                            
                            // the ratio of the value in between 
                            const tColor = (val - c1.val) / (c2.val - c1.val);
                            
                            // Interpolate  RGBA  values 
                            r = lerp(c1.r, c2.r, tColor);
                            g = lerp(c1.g, c2.g, tColor);
                            b = lerp(c1.b, c2.b, tColor);
                            a = lerp(c1.a, c2.a, tColor);
                            break;
                        }
                    }
                }            
            const idx = (y * canvasW + x) * 4;
            data[idx]     = r;
            data[idx + 1] = g;
            data[idx + 2] = b;
            data[idx + 3] = a;
        }
    }
}



// PixiJs container 
const singlePixiOverlay = L.pixiOverlay((utils) => {
    const renderer = utils.getRenderer();
    const project  = utils.latLngToLayerPoint;
   // const container = utils.getContainer ? utils.getContainer() : globalContainer;   
    // Reproject on the leaflet map 
    if (globalSprite.texture && globalSprite.texture.valid) {
        const topLeft     = project(L.latLng(ll_ymax, ll_xmin));
        const bottomRight = project(L.latLng(ll_ymin, ll_xmax));
        globalSprite.x      = topLeft.x;
        globalSprite.y      = topLeft.y;
        globalSprite.width  = bottomRight.x - topLeft.x;
        globalSprite.height = bottomRight.y - topLeft.y;
        
    }// for wind particles
    if (!isWindInitialized && windGrid.uData) {
        initWindParticles(renderer, globalContainer );         
        return; 
    }
    // GPU wind rendering 
    // CORRECTION 2
    // startWindLoop function ( 60  frames / second)
    if (!isWindInitialized) {
        renderer.render(globalContainer);
    }    
}, globalContainer);
// Add Pixi container to map 
singlePixiOverlay.addTo(map);



// Overlay contours 
const contourOverlay = L.pixiOverlay((utils) => {
    const renderer = utils.getRenderer();
    const project  = utils.latLngToLayerPoint;    
    // On vérifie si un GeoRASTER est actuellement chargé en mémoire
    if (globalSprite.texture && globalSprite.texture.valid && window.lastLoadedGeoRaster) {        
      // Initialisation of PixieGraphics 
        if (!window.contourGraphics) {
            window.contourGraphics = new PIXI.Graphics();
            globalContainer.addChild(window.contourGraphics); // Ajout au conteneur global pour être au-dessus du fond
        }
            window.contourGraphics.clear();
            window.contourGraphics.visible = true;
            /*const georaster = window.lastLoadedGeoRaster; // On récupère le raster actif (ex: Température ou MSLP)
            const rawData = georaster.values;            
            // Aplatissement du Float32Array à 2D
            const flatRasterData = georaster.values.flat();*/
            
         
            
            // Calcul des seuils dynamiques
            const minVal = (georaster.mins && georaster.mins !== undefined) ? georaster.mins : Math.min(...flatRasterData);
            const maxVal = (georaster.maxs && georaster.maxs !== undefined) ? georaster.maxs : Math.max(...flatRasterData);
            const thresholds = d3.range(minVal, maxVal, (maxVal - minVal) / 10);
            const contourGenerator = d3.contours().size([georaster.width, georaster.height]).thresholds(thresholds);
            const contourFeatures = contourGenerator(flatRasterData);
            const xmin_3857 = georaster.xmin;
            const ymax_3857 = georaster.ymax;
            const resX = georaster.pixelWidth;
            const resY = georaster.pixelHeight;
            contourFeatures.forEach(feature => {
                const coordinates = feature ? feature.coordinates : null;
                if (!coordinates || coordinates.length === 0) return;                
                // Style des lignes blanches
                window.contourGraphics.lineStyle(3.5, 0xFFFFFF, 0.9);
                coordinates.forEach(polygon => {
                    polygon.forEach(ring => {
                        if (!ring || ring.length === 0) return;
                        const getScreenPoint = (pixelCoord) => {
                            const x_3857 = xmin_3857 + (pixelCoord * resX);
                            const y_3857 = ymax_3857 - (pixelCoord * resY);           
                            const point3857 = L.point(x_3857, y_3857);
                            const latLngDegres = map.options.crs.unproject(point3857);                            
                            // Application de votre recalage de -0.2 degré sur la latitude
                            const latLngCorrige = L.latLng(latLngDegres.lat - 0.2, latLngDegres.lng);
                            return project(latLngCorrige);
                        };
                        const startPt = getScreenPoint(ring);
                        window.contourGraphics.moveTo(startPt.x, startPt.y);

                        for (let i = 1; i < ring.length; i++) {
                            const currentPt = getScreenPoint(ring[i]);
                            window.contourGraphics.lineTo(currentPt.x, currentPt.y);
                        }
                    });
                });
            });
      
    }    
    // Apply  rendring 
    renderer.render(globalContainer);
}, globalContainer);
// Add Pixi container to map 
//contourOverlay.addTo(map);


document.addEventListener("DOMContentLoaded", () => {
    const mslpCheckbox = document.getElementById('overlay-mslp');    
    if ( mslpCheckbox) {
         mslpCheckbox.addEventListener('change', () => {
            console.log("Adding regions to the map :", mslpCheckbox.checked);
            
            // Add regions 
            if (mslpCheckbox.checked) {
                //showRegions();
                contourOverlay.addTo(map);
                 contourOverlay.redraw(); 
            } else {
                if (typeof mslp !== 'undefined' && map.hasLayer(mslp)) {
			window.contourGraphics ;
            window.contourGraphics.clear();
            window.contourGraphics.visible = false;
            
                    //map.removeLayer(mslp); // Remiove regions 
                }
            }
        }); 
    } 
});





function showRegions (){
    let geoserverUrl = WMS_BASE_URL;
    console.log(geoserverUrl);

    if (!overlays.mslp) {
        mslp = L.tileLayer.wms(geoserverUrl, {
            layers: "behra_surf:bel_province_3857",
            transparent: true,
            format: "image/png",
            style: "regions_style",
            opacity: 0.7,
            pane: 'overlayPane' // Force wms to draw on the top of WCS 
        });
    }
    if (!map.hasLayer(mslp)) {
        mslp.addTo(map);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const regionCheckbox = document.getElementById('overlay-regions');    
    if (regionCheckbox) {
        regionCheckbox.addEventListener('change', () => {
            console.log("Adding regions to the map :", regionCheckbox.checked);
            
            // Add regions 
            if (regionCheckbox.checked) {
                showRegions();
            } else {
                if (typeof mslp !== 'undefined' && map.hasLayer(mslp)) {
                    map.removeLayer(mslp); // Remiove regions 
                }
            }
        }); 
    } 
});



// Get WCS coverage 
async function loadGeoTIFF(date, layer_name) {
    const cacheKey = `${layer_name}_${date}`;
    let  currentType = getLayerType(layer_name);
    // set a unique cache for each layer
    if (textureCache[cacheKey]) {
        if (textureCache[cacheKey].associatedGeoRaster) {
            const cachedGeo  = textureCache[cacheKey].associatedGeoRaster;
            currentGeoRaster = cachedGeo;
            currentWidth     = cachedGeo.width;
            currentHeight    = cachedGeo.height;                 
        }
        return textureCache[cacheKey];
    }
    // Compute the coordinates (EPSG:3857)
    var limites = map.getBounds();
    var southWest = map.options.crs.project(limites.getSouthWest());
    var northEast = map.options.crs.project(limites.getNorthEast());
    var xmin = southWest.x;
    var ymin = southWest.y;
    var xmax = northEast.x;
    var ymax = northEast.y;
    // Build the URL according to  "OGC WCS 2.0.1"
    let url = WCS_BASE_URL;
    url += 'SERVICE=WCS&REQUEST=GetCoverage&VERSION=2.0.1&';
    url += 'CoverageId=' + layer_name + '&FORMAT=image/tiff&'; 
    url += 'SUBSETTINGCRS=http://www.opengis.net/def/crs/EPSG/0/3857&';
    url += 'OUTPUTCRS=urn:ogc:def:crs:EPSG::3857&'; 
    url += 'subset=http://www.opengis.net/def/axis/OGC/0/Y(' + ymin + ',' + ymax + ')&';
    url += 'subset=http://www.opengis.net/def/axis/OGC/0/X(' + xmin + ',' + xmax + ')&';
    url += 'SUBSET=http://www.opengis.net/def/axis/OGC/0/time("' + date + '")';
    console.log(url) ; 
    // Asynchrone request to tiff data
    const tiffRes   = await fetch(url);
    const buffer    = await tiffRes.arrayBuffer();
    const georaster = await parseGeoraster(buffer);              
    // Raster resolution  dx dy  
    georaster.pixelWidth  = (georaster.xmax - georaster.xmin) / georaster.width;
    georaster.pixelHeight = (georaster.ymax - georaster.ymin) / georaster.height;        
    currentGeoRaster = georaster;
    currentWidth     = georaster.width;
    currentHeight    = georaster.height;        
    // CONTOURS on leaflet canvas 
    const layerCanvas  = document.createElement('canvas');
    layerCanvas.width  = georaster.width;
    layerCanvas.height = georaster.height;        
    const layerCtx  = layerCanvas.getContext('2d');        
    const imageData = layerCtx.createImageData(layerCanvas.width, layerCanvas.height);        
    
    // Extract 2d values 
    const raster = georaster.values[0];                
    
    // Attribution de la palette de couleurs fixée (cf. partie 3)
    //console.log("------->" , currentType)  ;
    setColors(raster, layerCanvas, imageData, currentType);
    layerCtx.putImageData(imageData, 0, 0);       

    // Transform to texture and send to GPU
    const localTexture = PIXI.Texture.from(layerCanvas);
    localTexture.associatedGeoRaster = georaster;
    
    // Add to  Cache 
    textureCache[cacheKey] = localTexture;       
    window.lastLoadedGeoRaster = georaster; 
    return localTexture;    
}


function buildSidebar() {
    const menu = document.getElementById("menu-container");
    menu.innerHTML = "";

   // group by categories
    const categories = {};
    // Basemaps + Layers
    const allItems = [
        ...sidebarConfig.basemaps,
        ...sidebarConfig.layers
    ];
    //console.log(sidebarConfig.layers)   ; 
    allItems.forEach(item => {
        const key = item.category.toLowerCase();
        if (!categories[key]) {
            categories[key] = {
                title: item.category.charAt(0).toUpperCase() +
                       item.category.slice(1).toLowerCase(),
                icon: item.icon,
                items: []
            };
        }
        categories[key].items.push(item);
    });
    // Build  menu
    Object.values(categories).forEach(cat => {
        const block = document.createElement("div");
        block.className = "menu-category";
        block.innerHTML = `
            <button class="category-trigger">
                <div class="trigger-content">
                    <i data-lucide="${cat.icon}"></i>
                    <span>${cat.title}</span>
                </div>
                <i data-lucide="chevron-down" class="chevron-icon"></i>
            </button>

            <div class="sub-levels"></div>
        `;
        const sub = block.querySelector(".sub-levels");
        cat.items.forEach(item => {

            const btn = document.createElement("button");
            btn.className = "level-item";
            btn.dataset.id = item.id;
            // Basemap or layers ?
            btn.dataset.type = item.layer ? "basemap" : "layer";
            btn.innerHTML = `
                <i data-lucide="layers"></i>
                ${item.label}
            `;
            sub.appendChild(btn);
        });
        menu.appendChild(block);
    });
    // Icons 
    lucide.createIcons();
    // Accordeon
    menu.querySelectorAll(".category-trigger")
        .forEach(trigger => {
            trigger.onclick = () => {
                trigger.parentElement.classList.toggle("active");
            };
        });
   // Select 
    menu.querySelectorAll(".level-item")
        .forEach(button => {
            button.onclick = async () => {
                menu.querySelectorAll(".level-item")
                    .forEach(b => b.classList.remove("selected"));
                button.classList.add("selected");
                // Basemap
                if (button.dataset.type === "basemap") {
                    const basemap = sidebarConfig.basemaps.find(
                        b => b.id === button.dataset.id
                    );
                    if (!basemap) return;
                    if (window.activeBasemap) {
                        map.removeLayer(window.activeBasemap);
                    }
                    window.activeBasemap = basemap.layer;
                    window.activeBasemap.addTo(map);
                    return;
                }
                // Model field layer  
                window.activeLayerId = button.dataset.id;
                await updateActiveRaster();
            };
        });
}
// PRELOAD 3 Layers and put in cache 
async function preloadNextSteps(count = N_PRE_LOADS) {
    if (!window.timeSteps || window.timeSteps.length === 0) return;    
    // Get the Active layer 
    const activeLayer = layersConfig.find(layer => layer.id === window.activeLayerId);
    if (!activeLayer) return
    // pre load  (temp, h, lcc ...)
    for (let i = 1; i <= count; i++) {
        const nextIndex = (window.currentIndex + i) % window.timeSteps.length;
        const nextTime = window.timeSteps[nextIndex];
        const cacheKey = `${activeLayer.name}_${nextTime}`;        
        // Si l'échéance suivante n'est pas encore en mémoire, on la télécharge en tâche de fond
        if (!textureCache[cacheKey]) {
            loadGeoTIFF(nextTime, activeLayer.name).catch(err => 
                console.warn("Layer Preload failed  : 	", err)
            );
        }
    }
}
// get layer suffix 
function getLayerType(layer_name) {
    const match = layer_name.match(/__([a-zA-Z]+)/);
    if (!match) return null;
  
    const rawType = match[1].toLowerCase();
    //console.log("Raw name-*----------> :" ,rawType) ; 
    return rawType  ;  
    //return rawType.startsWith("w") ? "w" : rawType;
}


// Layers group  
const groups = {};
layersConfig.forEach(layer => {    groups[layer.id] = layer.group; });
let activeLayer = null;
document.querySelectorAll(".level-item").forEach(btn => {
    btn.addEventListener("click", function () {
        const id = this.dataset.layer;
        // remove the previous layer
        if (activeLayer) {
            map.removeLayer(activeLayer);
        }
        // Add the selected 
        activeLayer = groups[id];
        activeLayer.addTo(map);
        document.querySelectorAll(".level-item")
            .forEach(b => b.classList.remove("selected"));
        this.classList.add("selected");
    });
});
document.querySelectorAll(".level-item").forEach(btn => {
    btn.addEventListener("click", async function () {
        const id = this.dataset.layer;
        if (id === activeLayerId)
            return;
        activeLayerId = id;
        window.activeLayerId = id;
        document.querySelectorAll(".level-item")
            .forEach(b => b.classList.remove("selected"));
        this.classList.add("selected");
        await updateActiveRaster();

    });
});

const layerDictionary = {};
layersConfig.forEach((layer, index) => {
			const htmlIndex = (index + 2).toString(); 
			layerDictionary[htmlIndex] = layer.id;
			//console.log(htmlIndex, layer.id)  ;  			
					});
let activeLayerId = layersConfig[0].id;
window.activeLayerId = activeLayerId;





window.updateActiveRaster = async function()  {
    // Check timeline
    if (!window.timeSteps || window.timeSteps.length === 0) {
        console.warn("Dates are not yet loaded from the server !");
        return;
    }

    if (window.currentIndex === undefined) {
        window.currentIndex = 0;
    }
    // Current date
    const current_time = window.timeSteps[window.currentIndex];
    

    const dateElement = document.querySelector(".time-display .date");
    if (dateElement) {
        dateElement.innerHTML = current_time;
    }
    // Active layer
    const activeLayer = layersConfig.find(
        layer => layer.id === window.activeLayerId
    );
    if (!activeLayer) {
        console.error("Unknown active layer :", window.activeLayerId);
        return;
    }
    const currentType = getLayerType(activeLayer.name);
  //  console.log("Layer :", activeLayer.name);
  //  console.log("Type  :", currentType);
    // Reset previous raster
    currentGeoRaster = null;
    currentRaster    = null;
    globalSprite.texture = PIXI.Texture.EMPTY;
    contourOverlay.redraw();
    // Load the GeoTIFF
    const newTexture = await loadGeoTIFF(   current_time,        activeLayer.name    );
    if (!newTexture)
            return;

    // Display new texture
    globalSprite.texture = newTexture;
    contourOverlay.redraw();
    // Synchronize raster Geo  information  texture & popup  
    currentGeoRaster = newTexture.associatedGeoRaster;
    currentRaster = currentGeoRaster.values[0];
    currentWidth = currentGeoRaster.width;
    currentHeight = currentGeoRaster.height;
    BBOX = [
        currentGeoRaster.xmin,
        currentGeoRaster.ymin,
        currentGeoRaster.xmax,
        currentGeoRaster.ymax
    ];
    // Popup + Legend
    const layerNameWMS = activeLayer.name.replace("__", ":");
    //console.log("layer suffix :",  layerNameWMS)  ; 
    let layerStyle = "default";
    switch (currentType) {
        case "temp":
            layerStyle = "temp_style";  window.currentDataTypeLabel = "Temperature";  window.currentDataUnit = "K";
            break;

        case "hum":
            layerStyle = "hum_style";   window.currentDataTypeLabel = "Humidity";     window.currentDataUnit = "%";
            break;

        case "neb":
            layerStyle = "neb_style";   window.currentDataTypeLabel = "Cloud cover";  window.currentDataUnit = "%";
            break;

        case "acrr":
            layerStyle = "acrr_style";  window.currentDataTypeLabel = "Accumulated radar rain"; window.currentDataUnit = "mm";
            break;

        case "clst":
            layerStyle = "temp_style";  window.currentDataTypeLabel = "2 meter temperature";  window.currentDataUnit = "°C";
            break;

        case "clsh":
            layerStyle = "hum_style";   window.currentDataTypeLabel = "2 meter relative humidity";  window.currentDataUnit = "%";
            break;

        case "lcc":
            layerStyle = "cloud_style"; window.currentDataTypeLabel = "Low level cloud cover"; window.currentDataUnit = "%";
            break;

        case "hcc":
            layerStyle = "cloud_style"; window.currentDataTypeLabel = "High level cloud cover"; window.currentDataUnit = "%";
            break;
            
        case "tcc":
            layerStyle = "cloud_style"; window.currentDataTypeLabel = "High level cloud cover"; window.currentDataUnit = "%";
            break;
      
        case "mcc":
            layerStyle = "cloud_style"; window.currentDataTypeLabel = "Mid-level cloud cover"; window.currentDataUnit = "%";
            break;
        case "pcp":
            layerStyle = "rain_style"; window.currentDataTypeLabel = "1h accumulated precipitation"; window.currentDataUnit = "mm";
            break;
        case "sst":
            layerStyle = "temp_style"; window.currentDataTypeLabel = "Sea surface temperature" ; window.currentDataUnit = "°C";
            break;
            
         case "sfcgeo":
            layerStyle = "geop_style"; window.currentDataTypeLabel = "Surface geopotentiel" ; window.currentDataUnit = "mgp";
            break;
         case "cape":
            layerStyle = "cape_style"; window.currentDataTypeLabel = "Surface CAPE" ; window.currentDataUnit = "J/s";
            break;
         case "clsw":
            layerStyle = "wind_style"; window.currentDataTypeLabel = "10 m wind speed" ; window.currentDataUnit = "m/s";
           break;
           
         case "pblh":
            layerStyle = "wind_style"; window.currentDataTypeLabel = "Height of Plan. boundary layer" ; window.currentDataUnit = "m";
            break;
            
         case "tsurf":
            layerStyle = "temp_style"; window.currentDataTypeLabel = "Skin temperature" ; window.currentDataUnit="°C";
            break;
            
         case "radsol":
            layerStyle = "radiation_style"; window.currentDataTypeLabel = "Accumulated solare radiation" ; window.currentDataUnit="J/m2";
            break;
         case "radter":
            layerStyle = "radiation_style"; window.currentDataTypeLabel = "Accumulated surface radiation" ; window.currentDataUnit="J/m2";
            break;
         case "soilt":
            layerStyle = "temp_style"; window.currentDataTypeLabel = "Soil temperature" ; window.currentDataUnit="C";
            break;
    }
    // Update legend
    if (typeof updateLegend === "function") {
        updateLegend(layerNameWMS, layerStyle);
    }
    // Preload next timesteps
    preloadNextSteps();
}

// Control layer opacity   
const slider = document.getElementById("opacity-slider");
const value  = document.getElementById("opacity-value");

slider.addEventListener("input", function ()
{
    const alpha = this.value / 100;
    globalSprite.alpha = alpha;
    value.textContent = this.value + " %";
    singlePixiOverlay.redraw();
});



// POPUP & Mousmove 
map.on('overlayadd', function(e) {
    const cleanName = e.name.trim();
    let   matchedId = layerDictionary[cleanName];
    //console.log( matchedId , cleanName  )   ; 
    if   (!matchedId) {
        const foundByText = layersConfig.find(layer => layer.label === cleanName);
        if (foundByText) matchedId = foundByText.id;
    }    
    if (matchedId) {		
        activeLayerId = matchedId;
        updateActiveRaster(); 
  //console.log( matchedId , cleanName  )   ;
    }
});





// The coordinates and value of raster data on the popup
map.on('mousemove', (e) => {
    if (!currentGeoRaster || !currentRaster) {
        map.removeLayer(pop_tooltip);
        return;
    }
    
    const lon = e.latlng.lng ;
    const lat = e.latlng.lat ; //+ 0.2 ;    
    
    // Domain  Bounding box  
    const xmin = ll_xmin;
    const ymin = ll_ymin;
    const xmax = ll_xmax;
    const ymax = ll_ymax;
    
    // Translate the geo coordinates to pixel coordinates
    const x = Math.floor(((lon - xmin) / (xmax - xmin)) * currentWidth);
    const y = Math.floor(((ymax - lat) / (ymax - ymin)) * currentHeight);
    
    let hasData = false;        
    if (x >= 0 && x < currentWidth && y >= 0 && y < currentHeight) {        
        const val = currentRaster[y] ? currentRaster[y][x] : null;        
        if (val !== undefined && val !== null && !isNaN(val) && val !== currentGeoRaster.noDataValue) {
            hasData = true;
 
 let  ew=  null;
 let  ns=  null; 
     if (lon >=0 ) { ew = "°E"	;  } else if  (lon <0 ) { ew = "°W"  }
     if (lat >=0 ) { ns = "°N"  ;  } else if  (lat <0 ) { ns< "°S"   }
     
            
            // Popup content  
            const labelText = window.currentDataTypeLabel || "Value";
            const unitText = window.currentDataUnit || "";
            const content = `
                <div class="elegant-popup">              
                    <div class="color-bar" style="background: #5a446e"></div>             
                    <div class="content-wrapper">
                    <span class="label">Parameter: ${labelText}</span>                  
                     <span class="label">
  Lon: ${String(Math.floor(lon)).padStart(2, '0')}.${lon.toFixed(4).split('.')[1]} ${ew}<br/>
  Lat: ${String(Math.floor(lat)).padStart(2, '0')}.${lat.toFixed(4).split('.')[1]} ${ns}
</span>
                        <span class="value">Value : ${val.toFixed(2)}<span class="unit">${unitText}</span></span>
                    </div>
                </div>
            `;            
            pop_tooltip
                .setLatLng(e.latlng)
                .setContent(content);           
            if (!map.hasLayer(pop_tooltip)) {
                pop_tooltip.addTo(map);
            }
        }
    }    
    if (!hasData) {
        map.removeLayer(pop_tooltip);
    }
});




// The updateActiveRaster is called directly when the app starts 
updateActiveRaster();

// Call sidebar 
buildSidebar(sidebarConfig)  ; 
