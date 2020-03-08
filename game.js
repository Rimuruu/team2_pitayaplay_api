const gameList = [
  {id:0,title:"Titre",jeu : "Animal Crossing",category:"RPG",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:"https://www.actugaming.net/wp-content/uploads/2016/09/Animal-Crossing-New-Leaf-900x450.jpg"},
  {id:1,title:"Jeu 1",jeu : "Doom Eternal",category:"FPS",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:"https://steamcdn-a.akamaihd.net/steam/apps/782330/capsule_616x353.jpg?t=1571753976"},
  {id:2,title:"Jeu 2",jeu : "Animal Crossing",category:"MMO",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:"https://illiweb.com/fa/darkages/logo.jpg"},
  {id:3,title:"Jeu 3",jeu : "Animal Crossing",category:"RTS",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:"https://i.pinimg.com/474x/15/16/20/15162009ec40030f6a48905a009cb32d.jpg"},
  {id:4,title:"Jeu 4",jeu : "Animal Crossing",category:"FPS/RTS",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:"https://i.pinimg.com/474x/f1/4b/7a/f14b7aba6cc15cc2ae25a97c8db6a199--nintendo-wii-wii-u.jpg"},
  {id:5,title:"Jeu 5",jeu : "Animal Crossing",category:"FPS/RTS",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:"https://i.pinimg.com/474x/5f/8a/18/5f8a181692a777de7ba9e20bc167cb60.jpg"},
  {id:6,title:"Jeu 6",jeu : "Animal Crossing",category:"RTS",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFRUXFxUXFhcXFxcXHRoYGBgXFxcXFxkYHSggGB0lHR4YITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGi0lHSYtLS8tLS0tLi0tLS8tLzUtLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABBEAACAQIEAwUFBQYEBgMAAAABAhEAAwQSITEFQVEGEyJhcQcygZHwFCNCobFSYnLB0fEVgpLhJDNDU3PDCGOy/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QALREAAgIBAwIEBAcBAAAAAAAAAAECESEDEjFB8ARRYaETInHhMoGRscHR8QX/2gAMAwEAAhEDEQA/ANXZw7AeHoWOwIA1EHpNP4G7B100AH8iY30o7bzoR5VLsYZfo11NnGkTLN4lYmTtOuo+hSkUaRy3nToDSEs7aajz0qRbB157VmzRAtiSD9QPPbrUgD4dJpoD+h8zzqSh0+telSy0R1QzqZ+tKeC05ko8lKx0IY/U0fd0tLdGq0DoaA1p4JSwtKy0rHQ2UFEUp4LRlaQURlSnBSwutKimFDQFKjpQK0oUgM/xzj62MTg8OYnEvcX0Cpofi7Wx8TV6F6/3rgftg7QueIubcRhRhTbbQ+MEXwykbA519cg6V3fAYoXbS3F0DKrbgxmAMGNJE1T6CQs0kJTpFHFIYiBSgtBxQBpANECkutOsKSVpiI/d0RWKfIpAWnYqGfqaW4kefP8AOlFacGtFhRCuWqhPZ+XpVtdXSorW6pMlorbwIEA/lUO3bO0mTvV0mHpo2ANeutWpGbiQUww9IpN22rQN46HX8qnslMtZ89NB0HqadioiPaXnpH0KZa9Ox/MfzqZcwx1ETt5x5imjgwYIMfED1p2KhS2SPKn7acyI+vKpCWpAmnEtxpUNlpB4ed96mAaaR1OlNW0/tUgHy/tvUM0SGlXmB6VItoPjRU8o0pNlJCY+dGq+VLoA1Iw8tGq0oUoCgYQWhFLoUhiYoiKXRGgQ2BRkUWagGpgFFRuJ45MPZuX3nLbRnYAawoJgdSdh51KmuV+2ztM1vucEmneDvLjTuolRbjzJzfAb00rYng4zjWe8l6/lgNcDNroC5Z8o8gcwHpXcfYJxZLvDzh/+ph7jBgTMrcYujek5l/yVxztPglsZFR8yOFcRtryPptHKfWpXsz7SnAY5Lm9u4O5uiQBDEZWk6DK2Uz0zda0miYs9QkUQpykGsiwGiAohR0AChloqE0CE5abdafAptloAZigKXFHlpiCfam4pbGiagCO8Uy1S8lACqsmiEEpt7fKpzrTV1KdiojIOUcjR90v0QP1pzJy5fW9JbDn489J+tIoFQ6GBpwJTVm3UtF0pMpCQP704ixQUUqkUDLT0Uys06ppDBNBQTSiKWtIYBShRUYNACqFFNCkMOktXFfa12yxVjiNu1Yud13XdEEEENnDZw6kQVgqCDI8IO4ro3Y/tVaxtm23eWu/KlrlpHDFIYoZEyBMb9ara6smy/ijpQFVlrjCNi7mD2uW7Vu76q7Opj+EhZ/jWkMm3x4WjeDHrFeWOPcTvX7ne3mLvmZGY/ukqABsB4R6616nv3Qis7GFUFiegAkmvJfFrxa45ggFs8ablVZo8pn4VpDhkS5Gr+MLWnRj+JCgiecGDy9NtT0FV5Xkfj+lTr7AqAOWuw1+O9RVMT9edNoEz0X7F8dfvYA3b9w3GN0qhb9i1btWl/wDySepJO5Nb4Vyr2YcZuWuFILGGbEm1euJdVGCuubLcDBW98Qx2M6AcyRu+IdpbVrAtjzPdiyLoGqkyBlTxCQxYhdRuahrJSZdGiorT5gCNiAR6HWl1IwgtCsZ207dJhb1jC2irXrl2yLmx7tGu21IbozKWI6ATzE7IXFzFQRmESOYBmCR0MHXyNNoQdJNKoE0hjUUCKWTRUxDZFERThFFFADUUmKeikEUCGzRFJpeWgVpioay0Sk+f18adK0QQc6AoSgp1TSAKOgY5PnQZqQDREdJpAOigK5td7c/4dxO7gsYf+GuRdsXjJNoXNSj8zbD5wD+GOnu9LEHUfMf1oGKWnENNgVgPal25fANh7VnL3jvncMDHdrss7atAPOPWaKsDohNEKhcF4gMRh7N8CO8to8DWCygkDrBkfCo3Z7jBxK3GNs28jlCrMjEMNwcjMOh+PlJKCy3oE1QcV7RjD43D4e5At4hHyt+zcVgFB8mDR5EL1NXs0NUFnm32tzc4rixp4TZA+Fi3oPixpvshx/E4fM1u8ltVtlQoybtsYbSdFkmdFHSme2OOGIx+KvEaNcuKACNrcWlMxr7oPod+dVOFw0khWymDJMgaQQCV1XXQbySo0ma3UcGUpHqHs9dm2VFq5bVWOQ3NDcB8WfctqSZLQSZPOuf8dxSYfi741rwXKUt5Nyyd2AyHXSfER5gaVnOyPtIuYS4MPfS2+HLBWa2uQroFLrHvL5ETA06G97cYvC4W4uJsMLmKxLLdtuGtuqKFy5llSCrSPDzPiEZamMalkJO4qh32pduMifZ7PeKxZkuErAKFTIE7kiGBHlO8Vxni92bjPsDt8OU+hHzq74rxW7imZ8SXusqyhMIAYgEKF1UwCQIk8+sfvTZs2XsqFu3BcY3IJdQrsgFonS3oNWUZv3gNKuqVEp7mRV4K4A7x7dhzqlu82Rm0kZhBFkHkbhUH01quxeDuW3Nu4jK/7JEHXYjqDyI0PKn0tSGOpJ1nfXck9Z/nVjwC6zXLOGcC5Ye9bTK0+DvHAZrLCGtNqT4TB/EDUGzhJJPzySey3ai/gy4tXMqPlZ01Bcw1sBCAcrQ+af8A6wdSADq8fxm/xPDW8KLVmxbQ6WbbMxbuwQASQAABrGvXlXOrFtWttmU5gFKkGB55lgzyiI+NX/CcQ9od7bYd8Mt222U+KAO9stPvA67HcNtpWijmzByxR6K7OFvstjN7wtWw38QUBvzFZH2g9vRh5wuFYNiD4WYQRa8tdDcjUDWOYOgON437Vbxsmzhk7ljHjJBKqU8QTo2YyG5AbTtg8MZMsZO5JMnTzNZx082y3PBG46GV/eJckvnmSWJJzE7k5p13kV2n2jcavWrfD+KYUHabrhS1vuby22C3o/CTseR21Iri/Gr/AHl0tEAALHpv+c13bsHduYrg1iymRT3bWGe4gugBGKaWjo5yge9A232onzZUHg2wxds5R3iEsJWHXxCJJXXURrUbDcawzv3aYmw7/srdts3+kGa57xLs9wzBYbD2rVtnu4hrdksLt62bgZgly7dVXAK+IwpESwG01uOy/CcLhbZs4bDmwAzgyrS0MVDG43/MBABGp0is2qyVZcUKVFZTt52rTB4a5cVhmAKgjWGgwBoRMwNdBNJKxt0aijFQeA2iuGsKZzC1bzEnMS2QZiWOrGZk86ngUAEaSRVfxntBhcLH2m+lrMrsucxISM0dTqNNzOk1j+w3bR+KY++1sFMJh7YCKfed7jaXH6eFXheU9dgDfxRUsiiigBs0mPr6FO5aSUHSgQ0yUtVoAUsCgAooAUZoxQM49/8AIPgOa3h8YBqrdxcP7rS6E+QbOP8APVV2V9rzYfh/cPbFy/YCJZLHKrWhCrMCSyaaaSomQQZ6h7UOH9/wrFrGq2+9X1tEXf0Uj415duJ4jpGu1NID1p2W4yMVh1uSO8ELdVQQEu5VZkE7jUEGSCCDNcN9ubE8VgGSLNnbWCSx25Hb8q0HYD2nFcOmEvqAyIEtXiYGVQFU3J5qJJPMJ13y3tA4vav417iLKBEUNEyyjMzBhoRJjeCBpVKD5FfQ0/Yzt5dti1ZugdxbtOG2OYE515jXL4BvvrvXT8RxIYZra2cOjW7iPeItsqP4QmYqkRchSv4gYWBOlefsImZZHl61c2eLYpba2heYIgcINCVV1ysqsRmykH3ZgaREV0PRUqaMPibW0bPili3fxRJa9dsWgrs1xpNsYhvCVY+9bKi2wEyATpMitlx/tAmCw83GLXSrC2o1Z2Uab+cSfPnXOez9yzatd/cuB2UCMOCAXKOmU3tJfxEuBOgt8xoKHjOPuYm41y6ZZjy0AA2AHQDSk9PdjohfErPVmXbDFdGmec7z5/rQVSJjmIPmOmnw+VXeB4RdvNks22uMAWyqJMCJP5j51HxeBe2ctxHtt+y6sh+TAGtKI3FS1urDC3A1p1YDOqg225gLEr5jKDp5CkNapzCqoYFhKz4hMSuxE8tKVEuRXqDr571aYm0Rh8M0GAt1Zg+93rnLPWCDHmKjvaEmNpMelP4LEPaJyNvoykBlYDk6nRviNOVTPT3KjXw/iFpainVkE/p/P6FWHZ+1mxWHABP39kjQnQXFYtHkJJPkakZcM3ibPaIiUQZw3/jZ2lPRs8bydFpGIxZKlLa91bOjKpkt/wCV939NF6KKxWgz0Z/9KKTrN+n5Z9uL4u1wUli0YAHOBU24xS0bU6uRn/hX3V+evwpy2sGefKkGzXTtPHUyALev16VIsDKZ6U/3NSsBwm7eJW1ba4wUsVQFjAIBMDU7ilVF77KRrXOtF2f7S4jDYY2LFxrZN03M4k7oqZYg6CC3OTEc5hPhCDBBBBggiCCNwQdjSreHIII0IMg0thfxC37M3nuY7D987d2rWygYk5ct3kSJIzSfRp5V6Aw2Nt3M3dur5TDZSDB6aV5tXBk7yRJMEnnvz51acGvXLAuC3I7y21ptTsSDyjUDaetTPS3BHVUTqHartxbskpa8eUFrjjadQlpD+J2I5bKCZ2rh3bHi17Gm0uTVyvdou0sSAFHUs2rQJPkKu/sbu0sSeQHQRsOlYziMk7kZdF11EbR8dajUjsVI005b3Z66w9rKir0VR8gBXMcB2hxFzG4tji0spaa6TbZk1sWyyymdYJ8MyDALEnoY3D/a+DZAGHZCLaorNcVgbuUAyNCRMEHnrIXeuYca4radVZUyv3l5mJbM7Kbhe2JKiAogyRJZ2OgAFZRwaPIx244tcxN/Pce4U17sPca5lBMsFkwNcoO2q+WnbfYbwTuOGrdIh8S7XTO+QeC2PkC3+evOty2zbB2YkBYEiD+EDfNMaV7A4HgBYw1iwsxbtW0E7+FQNfOplyUiZRUuKTFIYRFJIpRpJpiGwaXSAKGagBdKFNqadQUgDKAiCJBEEHUEHcGvKXajBpZxOIsqDKX7yglSvhFwhdNto+der686+2Kyg4neyiJW2z+bFF1HqI/OtNN8ikYt0gEUhQSDqTp/T86kXV8TDykfnSMEvijyrdrJHQsuAXlD5XYgEQCdp6HTn/KtiOGnpWGFgo5U6EET+ddT4HjbBs2kzjPlCldZkLr+VaQk0jn1VeUUZwB6UlsH5VqcRbSV13JnQ9DUS/ZQD3h9fCqswMzcsFdRoRqCNwRqCOhrpHtW4pdS1YtowC3Vu94MqtIhBHiBj3jqINYjFWxBrY+1ZJGE/hu/+qsp/ijfqawb2S/IwvZR7dvEq14qtvLdDZhIMowURlOuYqdtImo9xl+1o+dcue2S24A8MgnIoYgbnLqZp7DYp7UlMusTmt27m3TvFMfCr7hFjFXrZvvew2HsA5e9u4fCgFpiFHda689PyMU8OyFlV3+5T9oMXh7lqbQVHa8TdtqPBKqw7y0YkI8g5ORB8qm2cZhhh7K3HtMBhr63LYSXN1mJsENl8LKMvjnQKRSu0Yx2DcJdNgqwJR1w+FKsBvBNnQjSR586sMBwvGPlW5fwli9cGa1ZuYfDB2HIkC14J5DU6HTSpxS7/gfzW8e33Mx2duW1t4pXe2rPZy284/HnUyNDl8OYT50zwc20xdos6d2l5MzEHK1tWGcwRJDKDoRzq/7RXb+Ge3YzI18qDdX7JhsoZoyLaPcg3OYJGk7c4uLXAMafu+/wYxGTP9nNjDZ8vUkWoB5cx503Jc+ffkJRfC6d+Zju0jW3vFrbKVOaMusDOxEkIm4MgQYECTFTOLXbDYSyqFRcXuwVTVWAQzcMqDbfMcrCSGIzchFtwLD47E3LlpWw1t7c5ku2MOp0JBgLZJMHc+Y61b2uzXESD48IHE/d91hsxAMSIswAeU9dYpOSVJ9+wKMnbSefT7mT4Hdsrh7yXCqs2Yqw1eRbIVCpUh7bEkbgqQG6EI7GXO7x2Gcf91V+D/dn8mNTW4jiQ5tkW84bIV+zYac0xlju9TOmlafgnDsSb1vNewYZXQvaCYcXAAwLCEtaNHQ6dRRJ0n6jhlqunfmU3tLwwOPYgf8ATtz5mDqfhHyqgs4Ct721uOcS6eHKVT/p2ydp98rmHzqrwuA8qISqKDV/GyktcN8qc4bgZXXqfr8j8q0r4AgAjkRPpzosVg0UeAgMCZAOuu8j63q1IimVtvhgj1H61ybieGAJA18Ub+Qmu44QqqEuYCyfhWN4/wBn0x9kYywwt6t3ouPlUBTBaYhdBJ6jzrLU+ZmuhLZdnLb15yoSfCNhAH6VH7kmTBgRmO4E6Cek1f8AFuD9yxXvbV2I1ttmB0nTTXoeVR7uHzh7kLbBKgIsj/MBzH8zWMlR1b0TvZ1w+5iMfhbSKWVb1q45H4bdtg5zeXhFep64B7D+HMeKNcGi2sO0zMnOVUDQ77nWdtto7/WdmoU0Jo6TQARpJpVIM+VADazSiBzpINKBpiDEUsGmjSg1AD01wz224Vft6EkDPYTYjMGDXACV5jYV3AGuAdubxxXELljD2Lty5auXEuZUYklrlxp0MZcmUAmNAdYGjg8jqzHC2QMpUq3iJblEAgAfP50+uFFu4BrHdoGP7+UFxPLKSRH7tXHEODXrGMbB3YvBCgbSAVZFusVJ6AsOfunSnE4c3eZWtlhc8TKJ0DZvGNNIKsOXx3roTujJ4M/lIbeTprMzrvWr4FcW3iLebQaCSY301qFxLhItPbCrrPiOpGskemmWnsqMWVjlhSVPmAdG8iSBWqWGZvJvsYgDjQEDfWatP8HUqDCaidMx/nWV7PYjNZAYjMpI3+IPn/tVxY4oyDIHgbxE/wBgaicZNfKzKNJ0wsbwgAHQfI/1q49pFiVw/kLn/rqHZ4sZkhD5MJHrEinMX2jdv+Ytm4BsGSflrpWFTvJtcKaRj7PCWuZ8sAW7bXGJkCF5aczsBWs7T2LH+F4JX7wW/uzNrKSHNpiSQ2h1LcxrUfi/aW21jubVhbWaDcywAY1AEDr19KRw976YG5dItvhlIy2rqd5mYuFlRIyjMd53B0qnuw2ZrarS8iJ2h7UYa7bwVq2lwrh7tlnNxVBZLYCldGMlhv6VL7ZcFN/EW+I4W7aa0xtF7huIottbI8ZLEbADTcEHSsfj8Qbjl2UAmNFVVUACAAqwAIFbB+1WBvpbXEYE/dghQhUKsxOXVYGlU4uNUJSUrTGU4laxnHLN0a2l8CE6ZiiXGVoO3jIj0FS+JY/C4fi1zEXPtHeIRootshzWVUESQwEHbXXnUHtBhMH9ntYzCK9ljdy5STMqCcy6mCpA1BjXrUa92kuXF+9Sy75cveG0puFembYc+VKr4+gnKsPm7Lbs3jBf4w2IRSquGgHeBbVdY01In40zwtD/AIyW1n7RfE+X3gj0jT4VV8G4u2Hl7YUMdAzLmIHMLO06T6Cp3Z/ittL5xN0klczAAau7yPQDUmSelOnn6UTuuvrZpeGYNDxe+zAaKWT+KLYJHnBb86ouHcOZMYit7y31k9Yca/Hf41V/47dbEteBykuWUjlyy9CI01rTt2ltuyXhby3PD3jgkiAdcg8xpJ1jTzocZL9Ck4y/WyX2iw+bEsf3V/SmXQIp2BiRPymhx/jFlmW7aug7ZlysDp6iqO1xZLhJaQZ0nWfSKUVhWOdbnRbnHnwkDaJ8z/Sq9xLnUBjLf70zZ4tbZyg3HQjWN9OUafOo3EeNWkcrMkgz5GNBtr8Jqt6StEOLGuPYpbVh1uvLOGA5mCTEwBy5wNqxdsZ7XdK5IBNwoTpMAEnmfLTSTrU/iGNF4e47MCFEkkxDGQsAaRzH4qpr2KZjlVJMjNJjN+63UeXKTWEpSlk6IJRVDF11Xw5AT1ADE+SzS+K4k3SqKCLQtqyKoE5Cgcgn8RBJBPUUsWHtO4kE65TlFwwNRM6DQjf5U9xPCXbVpWvNluEMpRZBjMSsyIDSzCBWLkXtTZ0P2IYIq2MuEHXubYY7SjX8wUgagDJ8ZrqZrl3s74djcNeS2qgYa7Zt4gtkbKweMyFisreWVgTBEyOnT5qzUOaFJmhNAANJNGTSTQIZtsKMmollqkK0iqolMdHnRg00rUtBSGPLSVsKGLhRnYKrNAkqslQTuQJaPU0kGnRSGUXGOy1nEYmzibm9tGQgfiBOgY7wPH/qNM8Y7Krcu2rlorbyKqMI/ArgqEA0UgF/mB5jSGjFNSaBpMyvafseuI7sWzkALBgYIhtc/UsCAB6+VY7iPYG+rYkhB3fie3l8bZEzlLcaNmaE2BrrkUoLWkdaUSXppnDuD9n714fdJ3bMLbeLVDbZXZbkjVCQCY8tOgr8JiWZypLK9wW8vhJ1IBUQddVIg/3rv62QCTAkxJgAmJifSq88Dsd+2J7sG6wUEnX3dAQDs0QJ6KPOtF4nLtGb0TlwXu0JuModfDAbLqNDIykgzv61Wni8e8JPIxE68hXTeJdlke4XS3bGeS87l5EHbbf62x/arsfdU28hZgSdAqmGJbQEQ20b/wAquGrF8mctJozt3iycwT8AP51M4H23awHs3LQvYZzrbJgrOhIMHfeOuxFNcY7KXsMFZ1LZgD4QGg6+GBrIjUjTWq5OHX2mLTH5L+u/wrR7ZIzScXg0ScR4RcOtnF2j0zIR8y5NONxfh1r/AJOFDtGhv3WI16oJU/lWbxmAyoGyMp5yywPjIn5cqp7lyAQbgkbACfnyrNpepaT6UaLinELl987upgQqqCqIP2VGwHznzqHdxAmR9daprN4sQArOddFGpPnE6VZWrJQMbpFsjZNMx5xoTHLU9ZrKc4x+vkXHws559yVZxM89hHL+tSbd0HaD18vWqH/ErkqpYj4xvvoD+tOYO7evMwQmBEkvlABdVnfqwOlc8/idHRD0uhpLV9eR15yp/UTS7jnUTy5T+UxWX4hiijd2tyWBykiXBOxKkxpM8qtsb2dxttAxVnMKSgMsA5hCUAzDXSKyrU6yGtElPiwBAVSdiS2w6/7VX2uLFc3gQwNSxOg/d0An1PPSp1zs7j0xIw3ckkiVcCbeWYz5iY0O6mD5Aa1d4r2b4tr6AtYNgXPHBKMbQbZgEgsUHLYt5VonPhmi06MJ9ou2blu/EBwWQkeEj3Wy8iAfCfMelWuN4bi7lr7QFzIzFbmQOCPug+e4NgoU6Hbaux3uyWFbCjCd0otKPCNZU5i5YNMyWJJ11k9at7WFVU7sKMgUKFOoygRGu4jSrs02ZOJ9nOyOMyXQqQyEW7iFQBDBnOVyRJEW9B/3B0rXcJ9nvdPh3LAEENeiGJdCWBXMICsNDpPi+NdCihSbvkexGE457NrF6/auKAloGbtsZhmmASrD3DHMfsiImRZdpexOHxdy1dICOl61ecgD73JAyv10ET006RpyaImhIYZakk0CKTQMM0U0mhNMQomm2YdTSqSTQIhBPlTyaCoiPUlF+v6VbIQ8gpxBSF/XanF86ktAHWlBqSGmjFIY4ppS0gf2p1RSGKUUqgBQpDCoUdCgBBFJinaQRQIjYvCLcWGUHpImD1qhv9mbfclWksCzZhoT5EbRt/WtMKMiq3NcC2p8nHu3XDnshbiiFdVzJBlTDQBrEbTrMzWHvW7jOy5dVBJG+wk8jOunrXoHimARh94ocEKrF/kWEDQwTsBrVPb7PraVwgHfuhLsxJJVvCyq0yo5z1FD16xeS46KfQ5b2ZwF1Sl3KPFmK6agiVGhGUGY32GoE7QuO4V7ZdruU3GggAk5ZIE9AJnfyrRXr7YYva73KcwGbuxeJElQNJCkaDQctxpLvCv+LdrWJUFjc7vKmb3VZQxzDxK+kZTpp0rlhKUtVzeF3179z0dWEYaS045ffT+f6Mfw229y4qlSXMlpG6oJjM8AaKRMgADerXB8Be5jRb8C+MiG+8ZS1tmCFQQHgDrEia3PY/s3abEXHbfDFbIBBObISyvqY3ggakBR5GtRgOD20xl24LYDOMxPUzlBHTSRA6nrWktamqXJyPRik03lIwWO9mIFhnRPvciShZoVsoFwgKdY1IHiBMaRpWz7G9nXsHvbr3c7gTbZy6odQcjHXLGwOo861K24B660tVq3nkxVIAWjIo6EUxBUDQFERQITQNGBQZaYDRogtLIoUCCakUs02TTABNINKY03NAgyaSXomNI0p0KyBZ19NPnU5DA+t6r0JB1qTJMEc9/Tyq2QmSUucqWrUyBtr6c6MfEVJQ+DS0FRpjen7ZpDRJFLQ0ytGrVJZIFCkg0ZpDDopoGiNACqQ1HNEaBCaAo6KKYDeJtyumh5GAYJO9QEw5I70mSwGmqnLAMGOY8Xz+NWZFIZdIHLb4VLjZcZUcJ9onDctxr3jtq5zqRCm6ILTvDMJEk689q1/ZDhbWreEbqwJAbNpFwCSSPDOXYbkUftA7PBsNhWVmBt3wpOhc27pMgsD1jbr5VtsAwPdrl07pT7sAbaajQ7GPLyrDT0ZJNSyjv1/FabjHYqfD/b/Q8BgVSQsrLM7bQzO5OYkjefP+VT7dvxFvJR8ix/nRosaDalCuijzrYsUJoUUUCFUCaKhQAKM0QoUAFNChRNTASxpBNG1EaBCCaSWpTUwxpoTDZqQRSSaLPVE2FcemM/T9adBpl0BO1UiWQrV8c/nPOptpxA1E8h58qFCqaITH0n86cnX5UKFZmoCKet0KFJjQ6KM0VCkUOI1KLUdCkMbNyjzmhQoEGDShQoUDCJo6FCgAjSSaFCgCuxeGTKlormBfQGdIl523EaHrFPYGyFWByhf9OkUKFV0J6koUoGjoVJQYo5oqFACqItRUKQAzUJoUKYCS9FNChQIJjSIoqFMAmpsrRUKBMauIajOYoUKuJnIQtzfWktfFChV0Q2f//Z"},
  {id:7,title:"Jeu 7",jeu : "Animal Crossing",category:"RPG",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwJvOFNjXGwadglu68f_Ti__zUOjRJpWComrTIzLDjrPPrqDxh"},
  {id:8,title:"Jeu 8",jeu : "Animal Crossing",category:"MMO",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqdrnfsmYgToK3IcmMtvK5uw2oA9ikSRZA0HEKVH90RSwbEO9_"},
  {id:9,title:"Jeu 9",jeu : "Animal Crossing",category:"MMO",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR64llcVbNwD5CbQ4S1sNzQbh0gwe2U2-ltS6iIo6Jq55VJeRn6"},
  {id:10,title:"Jeu 10",jeu : "Animal Crossing",category:"RTS",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7Gx5K1Qgf_ASw9qDpXkx_Dub3mZGd5GQuQ6Z6oK6t3jW86GEp"},
  {id:11,title:"Jeu 11",jeu : "Animal Crossing",category:"FPS",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpRs5yPP2npGRrAjcNtLNKW6YDOygyh33AWNcWGwm9iMVKEH5s"}
]

const CommentList = [
  {id:0,text:"Comment 1 jeu 0",email:"a@b.fr",username:"pseudo"},
  {id:2,text:"Comment 1 jeu 2",email:"",username:""},
  {id:5,text:"Comment 1 jeu 5",email:"",username:""},
  {id:1,text:"Comment 1 jeu 1",email:"",username:""},
  {id:0,text:"Comment 2 jeu 0",email:"",username:""}
]

const CategoryList = [
  {category:"RPG",id:0},
  {category:"FPS",id:1},
  {category:"MMO",id:2},
  {category:"RTS",id:3}
]

export function getGame(req, res) {
  const id = req.params.id;
  for(let i = 0; i < gameList.length; i++){
    if(id == gameList[i].id) res.send(gameList[id]);
  }  
}

export function putGame(req, res) {

  const name = req.body.jeu || "Random";
  const category = req.body.category || "RPG";
  const titre = req.body.titre;
  const image = req.body.image;
  const auteur = req.body.auteur;
  const id = gameList.length;
  const text = req.body.text;
  const note = req.body.note;
  const jeu = req.body.jeu;
  const date = Date.now();
  const game = {id:id,title:titre,jeu : jeu,category:category,auteur:auteur,date:date,text:text,note:note,image:image};
  gameList.push(game);
  res.send("Test ajouté");
}

export function getListGame(req, res) {
  res.send(gameList);
}

export function getComment(req,res){
  const tab_resul = [];
  const id = req.params.id;

  CommentList.forEach(Comment);

  function Comment(item,index, arr){
    if(CommentList[index].id== id){
      tab_resul.push(CommentList[index])
    }
  }  
  res.send(tab_resul);
}

export function putComment(req,res){
  const idComment = req.params.id;
  const comment = {id:idComment,text:req.body.comment,email:req.body.email,username:req.body.username} 
  CommentList.push(comment);
  res.send(CommentList[CommentList.length-1]);
}

export function deleteComment(req,res){
  const idc = req.params.idc;
  const id = req.params.id;
  var count = 0;

  CommentList.forEach(Comment);

  function Comment(item,index, arr){
    if(CommentList[index][0] == id){
      count++;
      if(count == idc){  
        res.send(CommentList[index]);               
        CommentList.splice(index,1);             
        return;
      }
    }
  }  
  if(count < idc){
    res.send("Pas de Comment !");  
  }  
}

export function getCategory(req,res){
  const id = req.params.id;
  const tab_resul = [];
  var category=""; 
  for(let i = 0; i<CategoryList.length;i++){
      if(CategoryList[i].id == id) category = CategoryList[i].category;
  }


  gameList.forEach(CategoryGame);

  function CategoryGame(item,index, arr){
    if(gameList[index].category== category){
      tab_resul.push(gameList[index]);
    }
  }  
  res.send(tab_resul);
}

export function getListCategory(req,res){
  res.send(CategoryList);
}