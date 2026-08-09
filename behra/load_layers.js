
var LAYER_PALETTES = {
  
/*'clst': [
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
],*/
'clst':[
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
    { val: 25.0,   r: 80,  g: 0,   b: 0,   a: 200 },
    { val: 27.33,  r: 120, g: 0,   b: 40,  a: 200 }, // Rouge violacé
    { val: 29.67,  r: 160, g: 0,   b: 95,  a: 200 }, // Magenta foncé
    { val: 32.0,   r: 200, g: 0,   b: 150, a: 200 }, // Magenta vif
    { val: 34.33,  r: 240, g: 0,   b: 210, a: 200 }, // Fuchsia
    { val: 36.67,  r: 255, g: 80,  b: 255, a: 200 }, // Rose bonbon
    { val: 39.0,   r: 255, g: 150, b: 255, a: 200 }, // Rose clair
    { val: 41.33,  r: 255, g: 210, b: 255, a: 200 }, // Rose très pâle
    { val: 43.67,  r: 245, g: 245, b: 245, a: 200 }, // Blanc cassé / Brume
    { val: 45.0,   r: 210, g: 210, b: 210, a: 200 }  // Gris perle (Extrême)
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
    { val:   0, r:   0, g:   0, b: 131, a: 200 }, 
    { val:  100, r:   0, g:   0, b: 255, a: 200 }, 
    { val:  200, r:   0, g: 100, b: 255, a: 200 }, 
    { val:  300, r:   0, g: 200, b: 255, a: 200 }, 
    { val:  400, r:   0, g: 255, b: 150, a: 200 }, 
    { val:  500, r:   0, g: 255, b:   0, a: 200 }, 
    { val:  600, r: 100, g: 255, b:   0, a: 200 }, 
    { val:  700, r: 200, g: 255, b:   0, a: 200 }, 
    { val:  800, r: 255, g: 255, b:   0, a: 200 }, 
    { val:  900, r: 255, g: 200, b:   0, a: 200 }, 
    { val: 1000, r: 255, g: 140, b:   0, a: 200 }, 
    { val: 1100, r: 255, g:  60, b:   0, a: 200 }, 
    { val: 1200, r: 255, g:   0, b:   0, a: 200 }, 
    { val: 1300, r: 200, g:   0, b:   0, a: 200 }, 
    { val: 1400, r: 130, g:   0, b:   0, a: 200 }, 
    { val: 1500, r:  80, g:   0, b:   0, a: 200 }  
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
    { val: 950.0, r: 10, g: 0, b: 121, a: 230 },
    { val: 955.2, r: 33, g: 2, b: 159, a: 230 },
    { val: 960.4, r: 6, g: 8, b: 192, a:  230  },
    { val: 965.7, r: 0, g: 26, b: 213, a: 230  },
    { val: 970.9, r: 10, g: 64, b: 230, a: 230  },
    { val: 976.1, r: 16, g: 122, b: 246, a: 230  },
    { val: 981.3, r: 27, g: 176, b: 255, a: 230  },
    { val: 986.5, r: 58, g: 195, b: 255, a: 230 },
    { val: 991.7, r: 91, g: 220, b: 243, a: 230 },
    { val: 997.0, r: 108, g: 235, b: 222, a: 230 },
    { val: 1002.2, r: 131, g: 235, b: 188, a: 230 },
    { val: 1007.4, r: 166, g: 243, b: 169, a: 230 },
    { val: 1012.6, r: 208, g: 253, b: 158, a: 230 },
    { val: 1017.8, r: 232, g: 240, b: 131, a: 230 },
    { val: 1023.0, r: 246, g: 218, b: 106, a: 230 },
    { val: 1028.3, r: 255, g: 183, b: 83, a: 230 },
    { val: 1033.5, r: 249, g: 136, b: 72, a: 230 },
    { val: 1038.7, r: 239, g: 83, b: 78, a: 230 },
    { val: 1043.9, r: 255, g: 99, b: 99, a: 230 },
    { val: 1049.1, r: 255, g: 145, b: 145, a: 230 },
    { val: 1054.3, r: 245, g: 178, b: 173, a: 230 },
    { val: 1059.6, r: 255, g: 202, b: 202, a: 230 },
    { val: 1064.8, r: 255, g: 228, b: 228, a: 230 },
    { val: 1070.0, r: 255, g: 255, b: 255, a: 230 }


]
}; 


// Add upper air palettes 
// Better to clone the existing  palettes 
LAYER_PALETTES['t000'] = JSON.parse(JSON.stringify(LAYER_PALETTES['clst']));        // 1000 Hpa 
LAYER_PALETTES['t950'] = JSON.parse(JSON.stringify(LAYER_PALETTES['clst']));        // 950  Hpa 
LAYER_PALETTES['t900'] = JSON.parse(JSON.stringify(LAYER_PALETTES['clst']));        // 900  Hpa
LAYER_PALETTES['t800'] = JSON.parse(JSON.stringify(LAYER_PALETTES['clst']));        // 800  Hpa

LAYER_PALETTES['rh000'] = JSON.parse(JSON.stringify(LAYER_PALETTES['clsh']));       
LAYER_PALETTES['rh950'] = JSON.parse(JSON.stringify(LAYER_PALETTES['clsh']));       
LAYER_PALETTES['rh900'] = JSON.parse(JSON.stringify(LAYER_PALETTES['clsh']));       
LAYER_PALETTES['rh800'] = JSON.parse(JSON.stringify(LAYER_PALETTES['clsh']));       

LAYER_PALETTES['ws000'] = JSON.parse(JSON.stringify(LAYER_PALETTES['clsw']));       
LAYER_PALETTES['ws950'] = JSON.parse(JSON.stringify(LAYER_PALETTES['clsw']));       
LAYER_PALETTES['ws900'] = JSON.parse(JSON.stringify(LAYER_PALETTES['clsw']));      
LAYER_PALETTES['ws800'] = JSON.parse(JSON.stringify(LAYER_PALETTES['clsw']));      

LAYER_PALETTES['z000'] = JSON.parse(JSON.stringify(LAYER_PALETTES['sfcgeo']));       
LAYER_PALETTES['z950'] = JSON.parse(JSON.stringify(LAYER_PALETTES['sfcgeo']));       
LAYER_PALETTES['z900'] = JSON.parse(JSON.stringify(LAYER_PALETTES['sfcgeo']));       
LAYER_PALETTES['z800'] = JSON.parse(JSON.stringify(LAYER_PALETTES['sfcgeo']));       

// Global vars  
let pixiOverlay = null;
let currentGeoRaster = null;
let georaster; 
let isRasterLoading; 
let currentWidth = null;
let currentHeight = null; 
 

// Extent of ALARO 1.3Km (ESPG 4326)
RASTER_LAT_CORRECTION= 0.2 ;
const ll_xmin = -1.051405;
const ll_ymin =  47.59286 - RASTER_LAT_CORRECTION ;    // to be substracted in R 
const ll_xmax =  10.154072;
const ll_ymax =  54.277354- RASTER_LAT_CORRECTION ; 





// In EPSG 3857 Pseudo mercator  
/*const m_xmin = -117041.9559;
const m_xmax = 1130346.1429;
const m_ymin = 6039387.6153;
const m_ymax = 7222859.9602;*/
const r_xmin=-117041.;  
const r_ymin=6037813.;
const r_xmax=1130752.;
const r_ymax=7222873.;





//Substract 0.2 degrees --> corresponds to the starting  of the raster (TopLeft  )
/*const ll_xmin = -1.051405;
const ll_ymin =  47.39286;
const ll_xmax =  10.154072;
const ll_ymax =  54.077354; */


// Wind variables for animation 
let windGrid = { uData: null, vData: null, header: null };
let particleContainer = null;
let isWindInitialized = false;

// Pre-load N Layers and save in cache 
 let N_PRE_LOADS =  3  ; 

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


// Set starting opacity 
window.currentOpacity = 1.0;
const op_slider = document.getElementById("opacity-slider");
const op_value  = document.getElementById("opacity-value");
op_slider.value = 100;
op_value.textContent = "100%";
op_slider.addEventListener("input", function () {
    const alpha = this.value / 100;
    globalSprite.alpha = alpha
    op_value.textContent = `${this.value}%`;
    singlePixiOverlay.redraw();
});


// baseMap Leaflet
const southWest_corner  = L.latLng([38.5, 2.5]);
const northEast_corner  = L.latLng([55.5,  8.5]);
const map_extent        = L.latLngBounds(southWest_corner, northEast_corner);

// init the map object and view 
const map = L.map('map', { crs: L.CRS.EPSG3857 }).setView([50.5, 5.75], 6);

// Use three different map providers 
const osm1 = L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
    {
        minZoom: 6,
        maxZoom: 12,
        opacity: 0.8,
        attribution: '© OpenStreetMap'
    }
);

/*var osm1 = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});*/


var osm2  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 5,
	maxZoom: 12,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


var osm3 = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
});



// Basemap  
let activeBasemap = osm1;
activeBasemap.addTo(map);



const basemapsConfig = [
{  id: "osm_dark", label: "OSM Dark matter" , category: "Basemaps",  icon: "map",layer: osm1 },
{  id: "osm_topo", label: "OSM Bright "     , category: "Basemaps",  icon: "map",layer: osm2 },
{  id: "osm_sat" , label: "OSM Satellite"   , category: "Basemaps",  icon: "map",layer: osm3 }
] ; 


// Layers config  
const 	layersConfig = [

{    id: "behra_surf__clst"    , name : "behra_surf__clst"    ,label: "Temperature"              ,    category: "Surface"   ,    icon: "", group: L.layerGroup()},
{    id: "behra_surf__clsh"    , name : "behra_surf__clsh"    ,label: "Humidity"                 ,    category: "Surface"  ,    icon: "",    group: L.layerGroup()},
{    id: "behra_surf__clsw"    , name : "behra_surf__clsw"    ,label: "Wind speed"               ,    category: "surface"  ,    icon: "",     group: L.layerGroup()},
{    id: "behra_surf__hcc"     , name : "behra_surf__hcc"     ,label: "Heigh cloud cover"        ,    category: "surface"  ,    icon: "",      group: L.layerGroup()},
{    id: "behra_surf__mcc"     , name : "behra_surf__mcc"     ,label: "Mid-level cloud cover"    ,    category: "surface"  ,    icon: "",      group: L.layerGroup()},
{    id: "behra_surf__lcc"     , name : "behra_surf__lcc"     ,label: "Low level cloud cover"    ,    category: "surface"  ,    icon: "",      group: L.layerGroup()},
{    id: "behra_surf__tcc"     , name : "behra_surf__tcc"     ,label: "Tot level cloud cover"    ,    category: "surface"  ,    icon: "",      group: L.layerGroup()},
{    id: "behra_surf__sst"     , name : "behra_surf__sst"     ,label: "Sea surface temperature"  ,    category: "surface"  ,    icon: "", group: L.layerGroup()},
{    id: "behra_surf__tsurf"   , name : "behra_surf__tsurf"   ,label: "Surface temperature"      ,    category: "surface"  ,    icon: "", group: L.layerGroup()},
{    id: "behra_surf__soilt"   , name : "behra_surf__soilt"   ,label: "Soil temperature"         ,    category: "surface"  ,    icon: "", group: L.layerGroup()},
{    id: "behra_surf__cape"    , name : "behra_surf__cape"    ,label: "Surface CAPE"             ,    category: "surface"  ,    icon: "",     group: L.layerGroup()},
{    id: "behra_surf__pblh"    , name : "behra_surf__pblh"    ,label: "Height of boundary layer" ,    category: "surface"  ,    icon: "",     group: L.layerGroup()},
//{    id: "behra_surf__sfcgeo"  , name : "behra_surf__sfcgeo"  ,label: "Surface geopotentiel"     ,    category: "surface"  ,    icon: "",  group: L.layerGroup()},
{    id: "behra_surf__radsol"  , name : "behra_surf__radsol"  ,label: "Surface net solar radiation"  ,category: "surface"  ,    icon: "",  group: L.layerGroup()},
{    id: "behra_surf__radter"  , name : "behra_surf__radter"  ,label: "Surface net thermal radiation",category: "surface"  ,    icon: "",  group: L.layerGroup()},
{    id: "behra_surf__mslp"    , name : "behra_surf__mslp"    ,label: "Mean sea level pressure"    ,  category: "surface"  ,    icon: "",  group: L.layerGroup()},

{    id: "behra_upper__t000"   , name : "behra_upper__t000"   ,label: "Temperature 1000 hPa",   category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra_upper__t950"   , name : "behra_upper__t950"   ,label: "Temperature 950 hPa",    category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra_upper__t900"   , name : "behra_upper__t900"   ,label: "Temperature 900 hPa",    category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra_upper__t800"   , name : "behra_upper__t800"   ,label: "Temperature 800 hPa",    category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra_upper__rh000"   , name : "behra_upper__rh000"   ,label: "Rel. humidity 1000 hPa",   category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra_upper__rh950"   , name : "behra_upper__rh950"   ,label: "Rel. humidity 950 hPa",    category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra_upper__rh900"   , name : "behra_upper__rh900"   ,label: "Rel. humidity 900 hPa",    category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra_upper__rh800"   , name : "behra_upper__rh800"   ,label: "Rel. humidity 800 hPa",    category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra_upper__ws000"   , name : "behra_upper__ws000"   ,label: "Wind speed 1000 hPa",   category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra_upper__ws950"   , name : "behra_upper__ws950"   ,label: "Wind speed 950 hPa",    category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra_upper__ws900"   , name : "behra_upper__ws900"   ,label: "Wind speed 900 hPa",    category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra_upper__ws800"   , name : "behra_upper__ws800"   ,label: "Wind speed 800 hPa",    category: "Upper air",    icon: "",    group: L.layerGroup()},
/*{    id: "behra_upper__z000"   , name : "behra_upper__z000"   ,label: "Geopotential 1000 hPa",   category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra_upper__z950"   , name : "behra_upper__z950"   ,label: "Geopotential 950 hPa",    category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra_upper__z900"   , name : "behra_upper__z900"   ,label: "Geopotential 900 hPa",    category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra_upper__z800"   , name : "behra_upper__z800"   ,label: "Geopotential 800 hPa",    category: "Upper air",    icon: "",    group: L.layerGroup()},
{    id: "behra__acrr"         , name : "behra__acrr"         ,label: "Radar rain", category: "Radar"   ,     icon: "",     group: L.layerGroup()},*/
];

// Side bar layers 
const sidebarConfig = {
    basemaps: basemapsConfig,
    layers: layersConfig
};

// Legend position ih the leaflet  DOM 
const geoserverLegendControl = L.control({ position: 'topleft' });


// Get the legend from geoserver
geoserverLegendControl.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = '<img id="geoserver-legend-img" src="" alt="Légende GeoServer" style="display:none;">';
    return div;
};
geoserverLegendControl.addTo(map);

// legend upadate with layer selection 
function updateLegend(layerNameWCS, style_name) {
    const legendImg = document.querySelector('#geoserver-legend-img');
    if (!legendImg) return;
    // legend url
    const layerNameWMS = layerNameWCS.replace("__", ":");
    let url = WMS_BASE_URL; 
    url += "REQUEST=GetLegendGraphic&";
    url += "VERSION=1.3.0&";
    url += "TRANSPARENT=true&" ; 
    //url +="OPACITY=0.2&" ; 
    url += "FORMAT=image/png&";
    url += "LAYER=" + layerNameWMS+"&";
    url += "WIDTH=18&HEIGHT=19&"  ; 
    url += "LEGEND_OPTIONS=fontName:Roboto Mono;fontSize:14" ; 
    //console.log(url)  ;    
    // get the legend 
    if (style_name) {  url += "&STYLE=" + style_name;   }
    legendImg.src = url;
    legendImg.style.display = "block";
}


// Set color palette 
function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}	
function setColors(raster, canvas, imageData, layerType) {
    const data    = imageData.data;
    const canvasW = canvas.width;
    const canvasH = canvas.height;
    const rasterW = currentWidth;  
    const rasterH = currentHeight; 
  //console.log(layerType) ;
  //console.log("---------->" , LAYER_PALETTES[layerType])    ; 
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
    }
    
    // To be added later MAYBE !
    /*if (!isWindInitialized && windGrid.uData) {
        initWindParticles(renderer, globalContainer );         
        return; 
    }
    // GPU wind rendering 
    // CORRECTION 2
    // startWindLoop function ( 60  frames / second)
    if (!isWindInitialized) {
        renderer.render(globalContainer);
    } */   
}, globalContainer);
// Add Pixi container to map 
singlePixiOverlay.addTo(map);







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
                       
            //The particle apears after initialisation 
            if (isWindInitialized) {
                particles.forEach(p => resetParticle(p));
            }
        }
        return textureCache[cacheKey];
    }
//console.log("CACHE :", cacheKey);
    // Compute the coordinates (EPSG:3857)
    var limites = map.getBounds();
    var southWest = map.options.crs.project(limites.getSouthWest());
    var northEast = map.options.crs.project(limites.getNorthEast());
//console.log (limites)  ;  
//console.log(southWest  , northEast   )  ;

    var xmin = southWest.x;
    var ymin = southWest.y;
    var xmax = northEast.x;
    var ymax = northEast.y;
//console.log("Requested layer" , layer_name) ;
//console.log(xmin , xmax  , ymin , ymax  ) ;

    // Build the URL according to  "OGC WCS 2.0.1"
    let url = WCS_BASE_URL;
    url += 'SERVICE=WCS&REQUEST=GetCoverage&VERSION=2.0.1&';
    url += 'CoverageId=' + layer_name + '&FORMAT=image/tiff&'; 
    url += 'SUBSETTINGCRS=http://www.opengis.net/def/crs/EPSG/0/3857&';
    url += 'OUTPUTCRS=urn:ogc:def:crs:EPSG::3857&'; 
    url += 'subset=http://www.opengis.net/def/axis/OGC/0/Y(' + r_ymin + ',' + r_ymax + ')&';
    url += 'subset=http://www.opengis.net/def/axis/OGC/0/X(' + r_xmin + ',' + r_xmax + ')&';
    url += 'SUBSET=http://www.opengis.net/def/axis/OGC/0/time("' + date + '")';


//console.log(url)   ; 
//console.log(layer_name ,  date) ; 
    // Asynchrone request to get tiff data
    const tiffRes   = await fetch(url);
    const buffer    = await tiffRes.arrayBuffer();
    const georaster = await parseGeoraster(buffer);              
        
    //console.log("DOWNLOAD :", cacheKey);
    //console.log(georaster) ; 
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
    // Accordeon  items 
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
// PRELOAD N Layers and put in cache 
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
        // Put the next layer into the cache 
        if (!textureCache[cacheKey]) {
            loadGeoTIFF(nextTime, activeLayer.name).catch(err => 
                console.warn("Layer Preload failed  : 	", err)
            );
        }
    }
}
// get layer suffix 
/*function getLayerType(layer_name) {
    const match = layer_name.match(/__([a-zA-Z]+)/);
    if (!match) return null;
  
    const rawType = match[1].toLowerCase();
    //console.log("Raw name-*----------> :" ,rawType) ; 
    return rawType  ;  
    //return rawType.startsWith("w") ? "w" : rawType;
}*/

function getLayerType(layer_name) {
    //  \d or  [a-zA-Z0-9] 
    const match = layer_name.match(/__([a-zA-Z0-9]+)/);
    if (!match) return null;
  
    const rawType = match[1].toLowerCase();
    //console.log("RawType :--------->"  , 	 rawType)  ;
    return rawType;  
}




// close the popup if the mouse if outside the domain
map.on('mouseout', () => map.closePopup(pop_tooltip));
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
// set currentIndex as a 'visible' variable from the whole window
function onTimeChange(newIndex, currentDate) {
    window.currentIndex = newIndex;    
    updateActiveRaster();     
}

const layerDictionary = {};
layersConfig.forEach((layer, index) => {
			const htmlIndex = (index + 2).toString(); 
			layerDictionary[htmlIndex] = layer.id;
			//console.log(htmlIndex, layer.id)  ;  			
					});
let activeLayerId = layersConfig[0].id;
window.activeLayerId = activeLayerId;


// Update active raster on timeline buttons click  
//async function updateActiveRaster() {
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
    singlePixiOverlay.redraw();
    // Load the GeoTIFF
    const newTexture = await loadGeoTIFF(   current_time,        activeLayer.name    );
    if (!newTexture)
            return;

    // Display new texture
    globalSprite.texture = newTexture;
    singlePixiOverlay.redraw();
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
        case "temp"  :layerStyle = "temp_style"     ;window.currentDataTypeLabel = "Temperature"              ;window.currentDataUnit = "K";     break;
        case "hum"   :layerStyle = "hum_style"      ;window.currentDataTypeLabel = "Humidity"                 ;window.currentDataUnit = "%";     break;
        case "neb"   :layerStyle = "neb_style"      ;window.currentDataTypeLabel = "Cloud cover"              ;window.currentDataUnit = "%";     break;
        case "acrr"  :layerStyle = "acrr_style"     ;window.currentDataTypeLabel = "Accumulated radar rain"   ;window.currentDataUnit = "mm";    break;
        case "clst"  :layerStyle = "temp_style"     ;window.currentDataTypeLabel = "2 meter temperature"      ;window.currentDataUnit = "°C";    break;
        case "clsh"  :layerStyle = "hum_style"      ;window.currentDataTypeLabel = "2 meter relative humidity";window.currentDataUnit = "%";     break;
        case "lcc"   :layerStyle = "cloud_style"    ;window.currentDataTypeLabel = "Low level cloud cover"    ;window.currentDataUnit = "%";     break;
        case "hcc"   :layerStyle = "cloud_style"    ;window.currentDataTypeLabel = "High level cloud cover"   ;window.currentDataUnit = "%";     break;           
        case "tcc"   :layerStyle = "cloud_style"    ;window.currentDataTypeLabel = "High level cloud cover"   ;window.currentDataUnit = "%";     break;      
        case "mcc"   :layerStyle = "cloud_style"    ;window.currentDataTypeLabel = "Mid-level cloud cover"    ;window.currentDataUnit = "%";     break;
        case "pcp"   :layerStyle = "rain_style"     ;window.currentDataTypeLabel = "1h accumulated precipitation";window.currentDataUnit = "mm"; break;
        case "sst"   :layerStyle = "temp_style"     ;window.currentDataTypeLabel = "Sea surface temperature"  ;window.currentDataUnit = "°C";    break;            
        case "sfcgeo":layerStyle = "geop_style"     ;window.currentDataTypeLabel = "Surface geopotentiel"     ;window.currentDataUnit = "mgp";   break;
        case "cape"  :layerStyle = "cape_style"     ;window.currentDataTypeLabel = "Surface CAPE"             ;window.currentDataUnit = "J/s";   break;
        case "clsw"  :layerStyle = "wind_style"     ;window.currentDataTypeLabel = "10 m wind speed"          ;window.currentDataUnit = "m/s";   break;           
        case "pblh"  :layerStyle = "wind_style"     ;window.currentDataTypeLabel = "Height of PBL"            ;window.currentDataUnit = "m";     break;           
        case "tsurf" :layerStyle = "temp_style"     ;window.currentDataTypeLabel = "Skin temperature"         ;window.currentDataUnit="°C";      break;            
        case "radsol":layerStyle = "radiation_style";window.currentDataTypeLabel = "Accumulated solare radiation"  ;window.currentDataUnit="J/m2";break;
        case "radter":layerStyle = "radiation_style";window.currentDataTypeLabel = "Accumulated surface radiation" ;window.currentDataUnit="J/m2";break;
        case "soilt" :layerStyle = "temp_style"     ;window.currentDataTypeLabel = "Soil temperature"         ;window.currentDataUnit="°C";       break;
        case "mslp"  :layerStyle = "mslp_style"     ;window.currentDataTypeLabel = "Mean sea level pressure"  ;window.currentDataUnit="hPa";      break;
            
          // Upper air part    
         case "t000" :layerStyle = "temp_style"; window.currentDataTypeLabel = "Temperature at 1000 hPa" ; window.currentDataUnit="°C";           break;
         case "t950" :layerStyle = "temp_style"; window.currentDataTypeLabel = "Temperature at 950 hPa" ; window.currentDataUnit="°C";            break;
         case "t900" :layerStyle = "temp_style"; window.currentDataTypeLabel = "Temperature at 900 hPa" ; window.currentDataUnit="°C";            break;
         case "t800" :layerStyle = "temp_style"; window.currentDataTypeLabel = "Temperature at 800 hPa" ; window.currentDataUnit="°C";            break;

         case "rh000":layerStyle = "hum_style"; window.currentDataTypeLabel = "Rel. humidity at 1000 hPa" ; window.currentDataUnit="%";           break;
         case "rh950":layerStyle = "hum_style"; window.currentDataTypeLabel = "Rel. humidity at 950 hPa" ; window.currentDataUnit="%";            break;
         case "rh900":layerStyle = "hum_style"; window.currentDataTypeLabel = "Rel. humidity at 900 hPa" ; window.currentDataUnit="%";            break;
         case "rh800":layerStyle = "hum_style"; window.currentDataTypeLabel = "Rel. humidity at 800 hPa" ; window.currentDataUnit="%";            break;
            
         case "ws000":layerStyle = "wind_style"; window.currentDataTypeLabel = "Wind speed at 1000 hPa" ; window.currentDataUnit="m/s";           break;
         case "ws950":layerStyle = "wind_style"; window.currentDataTypeLabel = "Wind speed at  950 hPa" ; window.currentDataUnit="m/s";           break;
         case "ws900":layerStyle = "wind_style"; window.currentDataTypeLabel = "Wind speed at  900 hPa" ; window.currentDataUnit="m/s";           break;
         case "ws800":layerStyle = "wind_style"; window.currentDataTypeLabel = "Wind speed at  800 hPa" ; window.currentDataUnit="m/s";           break;
            
         case "z000" :layerStyle = "sfcgeo_style"; window.currentDataTypeLabel = "Geopotential at 1000 hPa" ; window.currentDataUnit="mgp";       break;
         case "z950" :layerStyle = "sfcgeo_style"; window.currentDataTypeLabel = "Geopotential at 950 hPa" ; window.currentDataUnit="mgp";        break;
         case "z900" :layerStyle = "sfcgeo_style"; window.currentDataTypeLabel = "Geopotential at 900 hPa" ; window.currentDataUnit="mgp";        break;
         case "z800" :layerStyle = "sfcgeo_style"; window.currentDataTypeLabel = "Geopotential at 800 hPa" ; window.currentDataUnit="mgp";        break;
                                       
    }
    // Update legend
    if (typeof updateLegend === "function") {
        updateLegend(layerNameWMS, layerStyle);
    }
    // Preload next timesteps
    preloadNextSteps();
}


//const cities = document.getElementById(".overlay-cities").checked  ; 
//console.log(cities); 





// Overlays 
function showRegions (){
    let geoserverUrl = WMS_BASE_URL;
    console.log(geoserverUrl);

    if (!overlays.mslp) {
        mslp = L.tileLayer.wms(geoserverUrl, {
           layers: "shp:bel_province_3857",
           //layers: "behra_surf:europ_merged_3857",
            transparent: true,
            format: "image/png",
            style: "regions_style",
            opacity: 0.5,
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


// Control layer opacity   
const slider = document.getElementById("opacity-slider");
const value  = document.getElementById("opacity-value");
// Initialisation
slider.value = globalSprite.alpha * 100;
value.textContent = `${slider.value} %`;

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
  Lon: ${String(Math.floor(lon)).padStart(2, '0')}.${lon.toFixed(3).split('.')[1]} ${ew}<br/>
  Lat: ${String(Math.floor(lat)).padStart(2, '0')}.${lat.toFixed(3).split('.')[1]} ${ns}
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


// The coordinates and value of raster data on the popup
map.on('onclick', (e) => {
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
  Lon: ${String(Math.floor(lon)).padStart(2, '0')}.${lon.toFixed(3).split('.')[1]} ${ew}<br/>
  Lat: ${String(Math.floor(lat)).padStart(2, '0')}.${lat.toFixed(3).split('.')[1]} ${ns}
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










