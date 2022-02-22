import React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `<svg width="796" height="638" viewBox="0 0 796 638" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_1)">
<path d="M479.271 192.257C480.313 192.305 481.345 192.031 482.227 191.473C483.109 190.915 483.798 190.099 484.201 189.136C484.603 188.173 484.7 187.109 484.478 186.09C484.256 185.07 483.726 184.143 482.96 183.434C482.832 182.924 482.739 182.558 482.611 182.048C482.657 181.937 482.703 181.826 482.75 181.715C487.436 170.54 503.318 170.617 507.965 181.808C512.089 191.741 517.34 201.691 518.632 212.193C519.202 216.835 518.962 221.541 517.922 226.101C527.609 204.971 532.639 182.006 532.671 158.762C532.673 152.93 532.349 147.101 531.7 141.305C531.164 136.553 530.42 131.835 529.469 127.15C524.277 101.734 513.131 77.9109 496.944 57.6386C489.11 53.3641 482.775 46.7908 478.791 38.8047C477.348 35.9339 476.328 32.8694 475.763 29.7064C476.647 29.8223 479.096 16.3632 478.429 15.5374C479.661 13.6686 481.865 12.7396 483.21 10.9159C489.9 1.84632 499.116 3.42993 503.927 15.7548C514.206 20.9423 514.305 29.5453 507.998 37.8194C503.986 43.0835 503.435 50.2064 499.914 55.842C500.277 56.3056 500.653 56.7548 501.015 57.2184C507.636 65.7321 513.407 74.8741 518.244 84.5134C516.876 73.8225 518.896 60.9428 522.341 52.6404C526.263 43.1806 533.612 35.2137 540.085 27.0358C547.859 17.2128 563.802 21.4998 565.171 33.9519C565.185 34.0724 565.197 34.1929 565.21 34.3134C564.249 34.8558 563.308 35.4314 562.387 36.0404C561.23 36.8133 560.334 37.9175 559.815 39.2084C559.297 40.4994 559.181 41.9168 559.482 43.275C559.782 44.6332 560.487 45.8689 561.502 46.82C562.517 47.7712 563.796 48.3935 565.171 48.6055L565.311 48.6272C564.969 52.0921 564.364 55.5259 563.501 58.899C571.804 91.0102 553.878 102.706 528.281 103.231C527.716 103.521 527.166 103.811 526.6 104.086C531.461 117.86 534.509 132.207 535.67 146.767C536.327 155.356 536.288 163.985 535.554 172.569L535.597 172.265C537.452 162.72 542.544 154.108 550.013 147.882C561.106 138.769 576.779 135.414 588.746 128.089C594.507 124.563 601.89 129.119 600.884 135.798C600.868 135.905 600.852 136.012 600.835 136.118C599.051 136.845 597.314 137.682 595.634 138.624C594.673 139.167 593.732 139.743 592.811 140.351C591.654 141.124 590.758 142.229 590.24 143.519C589.721 144.81 589.605 146.228 589.906 147.586C590.207 148.944 590.911 150.18 591.926 151.131C592.941 152.082 594.22 152.705 595.595 152.917L595.736 152.938C595.837 152.953 595.924 152.967 596.025 152.982C592.977 160.26 588.699 166.959 583.378 172.786C578.186 200.818 555.887 203.478 532.033 195.315H532.019C529.402 206.687 525.61 217.758 520.704 228.346H480.284C480.139 227.897 480.008 227.434 479.878 226.985C483.619 227.22 487.375 226.996 491.062 226.318C488.063 222.638 485.065 218.929 482.066 215.25C481.999 215.181 481.936 215.108 481.877 215.032C480.356 213.149 478.82 211.28 477.299 209.397L477.298 209.394C477.217 203.621 477.88 197.862 479.27 192.258L479.271 192.257Z" fill="#F2F2F2"/>
<path d="M605.522 117.644C598.401 91.6807 655.837 69.4168 670.919 90.3249C673.017 87.3524 680.767 85.5469 684.323 86.4587C687.88 87.3705 690.87 89.6502 693.788 91.8569C697.8 94.9389 701.958 98.1303 704.42 102.562C706.901 106.975 707.284 112.993 703.946 116.823C701.302 119.869 693.497 121.838 689.521 122.641C686.749 123.206 684.415 123.662 682.409 123.99C680.586 121.365 679.747 118.182 680.038 114.999C678.687 115.91 677.556 117.109 676.723 118.509C675.891 119.908 675.379 121.475 675.223 123.097C675.169 123.771 697.636 206.439 697.636 206.439C694.937 207.975 692.097 209.251 689.156 210.25C683.338 201.358 678.881 191.646 675.934 181.436C675.257 188.263 675.343 195.144 676.19 201.953C676.64 205.77 677.285 209.562 678.123 213.314C651.424 219.077 611.267 217.18 593.796 192.67C593.793 192.569 593.79 192.467 593.787 192.366C593.773 191.398 593.424 190.466 592.798 189.727C592.173 188.989 591.31 188.492 590.358 188.32C589.405 188.148 588.423 188.313 587.579 188.785C586.735 189.258 586.081 190.009 585.73 190.911C585.306 191.993 584.916 192.929 584.568 193.673C579.48 175.473 586.063 154.409 605.522 117.644Z" fill="#36393F"/>
<path d="M560.089 552.923V553.773C560.056 553.491 560.056 553.206 560.089 552.923V552.923Z" fill="#2F2E41"/>
<path d="M586.235 405.99C586.914 405.806 587.606 405.672 588.304 405.588C587.502 405.719 586.813 405.852 586.235 405.99Z" fill="#2F2E41"/>
<path d="M585.63 406.144C585.814 406.092 586.018 406.041 586.235 405.99C586.033 406.042 585.838 406.081 585.63 406.144Z" fill="#2F2E41"/>
<path d="M778.799 638H680.935L665.352 566.724C665.352 566.724 659.874 599.729 653.162 638H560.089V553.773C560.294 555.122 561.839 552.67 564.218 547.527C567.84 539.703 573.375 525.632 578.967 509.297C582.965 497.639 586.996 484.811 590.364 472.269H590.372C591.255 468.974 592.092 465.71 592.882 462.475C594.427 456.13 595.752 449.966 596.758 444.177C598.94 431.709 599.66 420.999 597.984 414.033C596.594 408.237 593.553 405.04 588.304 405.588C591.116 405.122 595.237 404.68 600.314 404.263C601.23 404.19 602.178 404.116 603.159 404.034C641.029 401.173 722.28 399.53 722.28 399.53L747.167 444.096L778.684 500.549C778.684 500.549 777.826 576.281 778.799 638Z" fill="#36393F"/>
<path d="M674.343 206.907L617.006 194.745L605.621 217.66L567.283 239.856C567.283 239.856 591.996 340.899 591.855 355.11C591.497 391.19 533.767 472.07 577.372 465.848C620.977 459.626 629.835 433.563 643.833 437.684C701.585 454.686 770.222 452.884 746.866 429.528C723.51 406.172 718.763 234 718.763 234L692.763 226L674.343 206.907Z" fill="#E6E6E6"/>
<path d="M566.199 573.852C568.503 571.105 569.644 567.567 569.379 563.992C569.114 560.416 567.465 557.085 564.782 554.707C564.229 554.232 563.637 553.804 563.014 553.427L572.6 506.378L550.438 493.113L544.274 558.985C542.91 561.692 542.481 564.775 543.053 567.751C543.625 570.728 545.167 573.432 547.437 575.44C548.74 576.571 550.253 577.433 551.889 577.979C553.525 578.525 555.253 578.743 556.974 578.621C558.694 578.499 560.374 578.04 561.917 577.269C563.46 576.498 564.836 575.43 565.966 574.127C566.045 574.037 566.123 573.945 566.199 573.852Z" fill="#A0616A"/>
<path d="M635.012 325.85C634.873 324.337 632.943 323.651 630.27 322.702C627.585 321.875 625.032 320.666 622.691 319.113C616.772 314.837 619.102 310.365 622.323 304.184C622.953 302.982 623.607 301.731 624.22 300.431C626.043 296.581 623.141 280.695 615.578 253.208C613.248 244.746 613.256 238.77 611.646 234.805C610.043 230.839 606.83 228.885 598.074 228.477C587.49 227.942 577.126 231.626 569.254 238.721C569.042 238.909 568.821 239.113 568.608 239.31C568.208 239.686 567.815 240.07 567.431 240.462C560.151 247.786 555.985 257.641 555.805 267.966L555.764 269.723L553.957 353.705L548.88 427.401L541.882 528.919L547.065 529.173L567.75 530.203L570.26 530.325L576.212 505.357L583.374 475.311L586.007 464.273L594.174 430.034L597.984 414.034L600.314 404.263L601.262 400.274L605.89 380.881C605.996 380.472 616.641 338.473 628.913 331.45C633.491 328.834 635.143 327.313 635.012 325.85Z" fill="#E6E6E6"/>
<path d="M772.701 573.352C770.116 570.868 768.601 567.473 768.48 563.89C768.36 560.307 769.642 556.818 772.054 554.165C772.553 553.634 773.095 553.145 773.674 552.703L759.09 506.955L779.7 491.387L792.903 556.216C794.55 558.761 795.307 561.78 795.058 564.801C794.809 567.822 793.567 570.675 791.525 572.916C790.351 574.18 788.94 575.2 787.372 575.918C785.803 576.637 784.109 577.039 782.385 577.103C780.662 577.166 778.942 576.89 777.325 576.289C775.709 575.688 774.226 574.775 772.962 573.601C772.874 573.519 772.787 573.436 772.701 573.352Z" fill="#A0616A"/>
<path d="M782.783 474.084L761.229 353.162L752.875 288.768L752.622 286.853L750.192 268.119C749.513 262.768 747.763 257.609 745.044 252.95C742.326 248.291 738.697 244.228 734.373 241.004C734.152 240.835 733.926 240.673 733.701 240.511C732.672 239.77 731.621 239.084 730.548 238.453C722.529 233.722 713.112 231.933 703.917 233.394C686.591 236.092 691.984 242.554 689.174 259.863C684.608 288.006 683.422 304.108 685.649 307.746C686.399 308.971 687.187 310.143 687.939 311.268C691.807 317.075 694.604 321.265 689.175 326.161C687.012 327.95 684.605 329.423 682.027 330.535C679.475 331.77 677.628 332.657 677.653 334.176C677.681 335.647 679.485 336.976 684.315 339.083C690.168 341.644 696.454 351.328 701.602 361.22C705.687 369.193 709.331 377.385 712.516 385.759L756.769 510.219L763.987 530.516L766.476 530.122L786.923 526.881L792.051 526.069L782.783 474.084Z" fill="#E6E6E6"/>
<path d="M695.722 157.672C701.557 132.505 685.885 107.373 660.718 101.537C635.55 95.7024 610.418 111.374 604.583 136.542C598.748 161.709 614.42 186.842 639.587 192.677C664.754 198.512 689.887 182.84 695.722 157.672Z" fill="#A0616A"/>
<path d="M579.991 121.291C572.869 95.3281 630.305 73.0642 645.388 93.9723C647.485 90.9998 655.236 89.1943 658.792 90.1061C662.348 91.0179 665.339 93.2976 668.257 95.5043C672.269 98.5863 676.427 101.778 678.889 106.209C681.369 110.623 681.752 116.641 678.415 120.47C675.77 123.516 667.965 125.486 663.989 126.288C661.217 126.853 658.883 127.309 656.877 127.638C655.055 125.012 654.216 121.829 654.506 118.647C653.156 119.558 652.024 120.756 651.192 122.156C650.359 123.556 649.847 125.123 649.692 126.744C649.637 127.419 672.105 210.086 672.105 210.086C669.405 211.623 666.566 212.899 663.625 213.898C657.806 205.005 653.35 195.293 650.403 185.083C649.726 191.911 649.811 198.792 650.658 205.6C651.109 209.418 651.754 213.21 652.591 216.961C625.893 222.724 585.735 220.828 568.264 196.317C568.261 196.216 568.258 196.115 568.256 196.013C568.242 195.046 567.892 194.113 567.267 193.375C566.641 192.637 565.778 192.139 564.826 191.967C563.874 191.795 562.892 191.96 562.048 192.433C561.203 192.905 560.55 193.657 560.199 194.559C559.775 195.64 559.385 196.576 559.037 197.32C553.948 179.12 560.532 158.057 579.991 121.291Z" fill="#36393F"/>
<path d="M337.256 263.257C336.214 263.305 335.181 263.031 334.3 262.473C333.418 261.915 332.729 261.099 332.326 260.136C331.924 259.173 331.827 258.109 332.049 257.09C332.271 256.07 332.801 255.143 333.567 254.434C333.695 253.924 333.788 253.558 333.916 253.048C333.87 252.937 333.824 252.826 333.777 252.715C329.091 241.54 313.209 241.617 308.562 252.808C304.438 262.741 299.187 272.691 297.895 283.193C297.325 287.835 297.565 292.541 298.604 297.101C288.918 275.971 283.888 253.006 283.856 229.762C283.854 223.93 284.178 218.101 284.827 212.305C285.363 207.553 286.107 202.835 287.058 198.15C292.25 172.733 303.396 148.911 319.583 128.639C327.417 124.364 333.752 117.791 337.736 109.805C339.179 106.934 340.198 103.869 340.763 100.706C339.88 100.822 337.431 87.3631 338.098 86.5373C336.866 84.6685 334.662 83.7395 333.317 81.9159C326.627 72.8463 317.411 74.4299 312.599 86.7548C302.321 91.9422 302.222 100.545 308.528 108.819C312.541 114.083 313.092 121.206 316.613 126.842C316.25 127.306 315.874 127.755 315.511 128.218C308.891 136.732 303.12 145.874 298.282 155.513C299.651 144.822 297.63 131.943 294.186 123.64C290.264 114.181 282.915 106.214 276.442 98.0357C268.668 88.2128 252.725 92.4997 251.356 104.952C251.342 105.072 251.329 105.193 251.317 105.313C252.278 105.856 253.219 106.431 254.14 107.04C255.297 107.813 256.193 108.917 256.711 110.208C257.23 111.499 257.346 112.917 257.045 114.275C256.744 115.633 256.04 116.869 255.025 117.82C254.01 118.771 252.731 119.393 251.356 119.605L251.215 119.627C251.558 123.092 252.163 126.526 253.026 129.899C244.723 162.01 262.649 173.706 288.246 174.231C288.811 174.521 289.361 174.811 289.926 175.086C285.066 188.86 282.018 203.207 280.857 217.766C280.2 226.356 280.239 234.985 280.973 243.569L280.93 243.265C279.075 233.72 273.983 225.108 266.514 218.882C255.421 209.769 239.748 206.414 227.781 199.089C222.02 195.563 214.637 200.119 215.643 206.798C215.659 206.905 215.675 207.011 215.692 207.118C217.476 207.845 219.213 208.682 220.893 209.624C221.854 210.167 222.795 210.743 223.716 211.351C224.873 212.124 225.769 213.228 226.287 214.519C226.806 215.81 226.922 217.228 226.621 218.586C226.32 219.944 225.616 221.18 224.601 222.131C223.586 223.082 222.307 223.705 220.932 223.917L220.791 223.938C220.69 223.953 220.603 223.967 220.502 223.982C223.55 231.26 227.828 237.959 233.149 243.786C238.341 271.818 260.64 274.478 284.493 266.315H284.508C287.125 277.687 290.917 288.758 295.823 299.346H336.243C336.388 298.897 336.519 298.434 336.649 297.984C332.908 298.22 329.152 297.996 325.465 297.318C328.464 293.638 331.462 289.929 334.461 286.25C334.528 286.181 334.591 286.108 334.65 286.032C336.171 284.149 337.707 282.28 339.228 280.397L339.229 280.394C339.31 274.621 338.647 268.862 337.257 263.258L337.256 263.257Z" fill="#F2F2F2"/>
<path d="M516.545 512.273C516.545 512.273 515.041 519.893 512.809 531.445C506.849 562.317 495.697 621.256 494.144 638H402.649C401.643 616.073 400.687 600.105 400.687 600.105L349.384 638H194.96C203.839 615.01 220.763 587.752 239.534 561.442C256.458 537.741 274.878 514.816 290.29 496.486C290.984 495.644 291.688 494.818 292.374 494C311.285 471.615 325.159 456.686 325.159 456.686L348.607 463.497L516.545 512.273Z" fill="#36393F"/>
<path d="M434.745 131.484L383.823 134.769L350.407 177.566L294.809 219.933L330.085 327.295C330.085 327.295 328.348 382.163 322.411 389.057C316.474 395.951 306.618 387.737 316.474 402.521C326.33 417.305 326.33 433.811 326.33 433.811C326.33 433.811 270.169 480.547 290.192 492.867C310.214 505.187 350.658 473.155 371.347 492.046C392.036 510.936 529.475 548.976 530.018 522.435C530.562 495.893 495.701 288.647 495.701 288.647L503.736 188.977L457.742 157.766L434.745 131.484Z" fill="#5763E9"/>
<path d="M354.143 550.252L336.883 498.292L305.824 504.011L326.028 558.297C324.8 561.478 324.483 564.938 325.113 568.289C325.744 571.64 327.297 574.749 329.597 577.265C331.897 579.782 334.854 581.608 338.135 582.536C341.416 583.465 344.89 583.46 348.168 582.522C351.447 581.584 354.398 579.75 356.691 577.226C358.984 574.703 360.528 571.59 361.149 568.237C361.769 564.884 361.443 561.425 360.205 558.248C358.968 555.071 356.868 552.302 354.143 550.252V550.252Z" fill="#FFB6B6"/>
<path d="M308.214 211.572L307.395 211.913C299.78 215.088 293.053 220.072 287.798 226.433C282.542 232.794 278.916 240.34 277.234 248.418C272.832 269.489 268.5 299.965 271.925 328.503C277.973 378.905 265.579 401.082 273.643 417.21C281.707 433.339 283.723 427.29 281.707 439.387C279.691 451.483 269.611 441.403 279.691 457.531C289.771 473.66 295.819 469.628 291.787 477.692C287.755 485.756 281.707 485.756 289.771 495.837C297.836 505.917 297.836 509.949 299.852 513.981C301.868 518.013 307.916 548.254 307.916 548.254C307.916 548.254 340.173 538.174 358.317 542.206C358.317 542.206 342.189 513.981 346.221 507.933C350.253 501.885 356.301 499.869 350.253 493.82C344.205 487.772 334.125 489.788 344.205 483.74C354.285 477.692 346.042 354.884 346.042 354.884L308.214 211.572Z" fill="#5763E9"/>
<path d="M575.512 489.969L563.73 436.5L593.336 425.508L603.781 482.482C606.465 484.585 608.509 487.395 609.683 490.596C610.858 493.797 611.116 497.262 610.429 500.602C609.742 503.942 608.137 507.024 605.794 509.501C603.452 511.979 600.465 513.754 597.169 514.627C593.873 515.5 590.398 515.436 587.137 514.443C583.875 513.45 580.955 511.566 578.705 509.004C576.455 506.443 574.964 503.304 574.4 499.941C573.836 496.578 574.221 493.125 575.512 489.969V489.969Z" fill="#FFB6B6"/>
<path d="M455.64 167.133L456.518 167.006C464.685 165.834 473.015 166.671 480.787 169.443C488.558 172.215 495.537 176.84 501.118 182.917C515.689 198.761 535.017 222.721 546.689 248.987C567.303 295.376 575.196 316.489 576.529 334.472C577.861 352.455 573.032 348.292 580.958 357.65C588.884 367.007 592.381 353.187 591.981 372.202C591.582 391.218 584.322 390.851 591.915 395.713C599.508 400.575 604.703 397.478 602.938 410.266C601.174 423.054 603.238 426.517 603.572 431.013C603.905 435.509 614.195 464.581 614.195 464.581C614.195 464.581 581.327 472.441 567.807 485.196C567.807 485.196 567.207 452.693 560.646 449.563C554.086 446.433 547.858 447.798 549.956 439.506C552.054 431.214 561.745 427.783 549.989 427.75C538.233 427.717 467.598 276.037 467.598 276.037L455.64 167.133Z" fill="#5763E9"/>
<path d="M406.351 126.206C435.958 126.206 459.958 102.205 459.958 72.5988C459.958 42.9925 435.958 18.9919 406.351 18.9919C376.745 18.9919 352.744 42.9925 352.744 72.5988C352.744 102.205 376.745 126.206 406.351 126.206Z" fill="#FFB6B6"/>
<path d="M468.835 55.1798C463.329 57.6905 459.762 75.8743 455.434 71.6469C451.106 67.4196 451.395 61.9184 445.56 60.3583C440.848 59.093 435.778 60.539 431.48 62.8196C430.712 63.222 429.968 63.6595 429.243 64.0947C428.765 63.7749 428.288 63.4739 427.777 63.1963C423.933 61.139 419.446 60.6343 415.24 61.7862C418.563 62.8992 421.452 65.0286 423.499 67.8734C422.061 68.8373 420.604 69.8037 419.113 70.6601C406.663 77.8448 388.947 62.2218 375.842 56.3527C384.051 71.7567 380.009 78.1362 372.881 94.0672L372.635 94.9743C373.04 90.9816 360.685 88.006 361.401 93.6266C361.91 97.6173 365.363 106.487 367.298 110.011C353.519 94.0791 344.104 74.583 346.09 54.4712C346.523 50.2464 346.393 45.7887 348.572 42.1217C350.753 38.4737 355.301 35.9137 359.324 37.3048C358.984 30.891 360.387 24.5046 363.386 18.8247C366.385 13.1447 370.866 8.38359 376.355 5.04737C381.843 1.71115 388.133 -0.0754497 394.556 -0.122461C400.979 -0.169472 407.294 1.52486 412.831 4.78039C417.976 7.79925 422.271 12.0689 426.986 15.7518C431.702 19.4346 437.137 22.6449 443.117 22.9489C446.91 23.1319 451.038 22.2058 454.296 24.1704C458.071 26.45 458.718 31.2227 459.284 35.8153C455.917 36.1472 452.726 37.4755 450.117 39.6303C453.601 39.2749 457.108 40.0272 460.14 41.78C460.197 41.806 460.252 41.8373 460.304 41.8733C462.3 49.4633 462.095 51.1459 468.835 55.1798Z" fill="#36393F"/>
<path d="M160.168 116.468C159.34 118.397 133.818 118.19 132.649 119.908C123.636 133.169 156.125 189.59 147.112 202.868L145.857 204.365C148.797 203.01 151.621 201.416 154.302 199.6C154.542 194.165 154.783 188.713 155.041 183.278C157.741 186.731 159.92 190.562 161.508 194.647C163.607 193.168 165.328 190.426 174.322 185.033C177.963 181.033 182.161 177.577 186.786 174.773L160.168 116.468Z" fill="#36393F"/>
<path d="M178.701 225.148C175.885 223.313 172.672 222.176 169.328 221.832C165.984 221.488 162.607 221.946 159.476 223.169C156.344 224.391 153.55 226.343 151.324 228.862C149.098 231.381 147.505 234.394 146.677 237.652L107.892 338.709L41.2249 300.861C40.9322 296.51 39.2693 292.364 36.4746 289.018C33.6799 285.671 29.897 283.295 25.6686 282.231C21.4401 281.167 16.9833 281.469 12.9373 283.095C8.89139 284.72 5.46414 287.585 3.14717 291.279C0.830195 294.973 -0.257473 299.305 0.0401593 303.655C0.337791 308.005 2.00543 312.15 4.80391 315.493C7.60238 318.837 11.3879 321.209 15.6176 322.268C19.8472 323.327 24.3037 323.02 28.3478 321.39C42.3873 336.374 103.254 397.809 128.452 373.805C149.632 353.628 180.198 275.431 187.556 248.427C188.734 244.109 188.512 239.529 186.921 235.345C185.33 231.162 182.452 227.591 178.701 225.148V225.148Z" fill="#FFB6B6"/>
<path d="M105.874 378.039L118.113 433.359L207.611 441.455L215.836 393.286L105.874 378.039Z" fill="#FFB6B6"/>
<path d="M242.584 519.901C242.543 520.694 242.494 521.479 242.437 522.272C241.578 533.735 240.597 546.955 239.534 561.442C237.858 584.432 235.986 610.611 234.098 638H46.3741L110.709 444.627L112.876 415.227L114.11 415.252L211.802 416.879L213.585 416.911L216.585 442.15C234.803 463.829 244.098 491.624 242.584 519.901L242.584 519.901Z" fill="#36393F"/>
<path d="M161.733 198.338L206.28 196.043L226.971 228.738C226.971 228.738 265.902 235.246 263.204 281.122C260.505 326.997 215.836 367.253 215.836 367.253L217.746 360.707L214.43 370.182L214.855 375.503L219.379 381.138L219.845 386.965L215.837 396.185L221.287 405.013L106.688 393.91L102.497 378.644L108.611 370.447L105.196 359.754L110.329 349.47L113.006 347.239C113.006 347.239 83.7213 303.243 117.339 270.105L130.832 247.168L145.929 228.748L161.733 198.338Z" fill="#5763E9"/>
<path d="M172.82 179.038C196.15 179.038 215.063 160.125 215.063 136.795C215.063 113.464 196.15 94.5515 172.82 94.5515C149.489 94.5515 130.576 113.464 130.576 136.795C130.576 160.125 149.489 179.038 172.82 179.038Z" fill="#FFB6B6"/>
<path d="M204.904 197.65C201.464 194.775 199.07 190.845 198.093 186.47C197.312 191.782 197.516 197.193 198.695 202.431C196.407 204.151 194.189 205.785 192.09 207.264C190.502 203.179 188.323 199.348 185.623 195.895C185.365 201.33 185.125 206.782 184.884 212.217C182.203 214.033 179.379 215.627 176.439 216.982L177.694 215.485C186.707 202.207 163.384 177.767 172.397 164.506C174.925 160.791 163.505 131.432 154.802 130.107C147.062 128.938 147.389 131.174 139.89 132.808C139.111 129.56 137.902 126.43 136.295 123.503C136.723 126.765 136.624 130.075 136.003 133.306C133.337 133.41 131.24 131.711 128.401 131.277C110.29 128.508 112.13 108.918 117.17 102.709C122.226 96.5168 139.013 94.6592 146.753 92.6468C147.458 91.9589 149.057 92.3889 149.762 91.7353C164.595 78.1606 184.433 75.9125 202.285 81.9291C221.324 88.3454 233.193 100.764 239.286 119.908L241.033 135.228C242.6 140.154 240.629 163.074 239.286 168.066C234.065 187.471 222.948 177.784 204.904 197.65Z" fill="#36393F"/>
<path d="M266.499 397.788L264.836 268.264C264.749 262.777 262.508 257.544 258.597 253.694C254.686 249.844 249.418 247.686 243.93 247.686H243.93C241.091 247.686 238.282 248.264 235.673 249.386C233.065 250.507 230.712 252.147 228.759 254.207C226.805 256.267 225.292 258.704 224.31 261.368C223.329 264.032 222.901 266.868 223.051 269.703L228.904 404.194L229.015 486.065C225.565 487.528 222.65 490.017 220.665 493.194C218.68 496.372 217.72 500.083 217.918 503.824C218.115 507.566 219.46 511.155 221.769 514.106C224.077 517.057 227.238 519.225 230.822 520.316C234.406 521.408 238.239 521.37 241.801 520.207C245.362 519.044 248.479 516.813 250.729 513.817C252.978 510.821 254.251 507.205 254.373 503.46C254.496 499.716 253.463 496.024 251.415 492.887L266.499 397.788Z" fill="#FFB6B6"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="795.105" height="638" fill="white"/>
</clipPath>
</defs>
</svg>`;

export default function LogoGroupChat() {
  return (
    <SvgCss
      xml={xml}
      width={220}
      height={220}
      style={{alignSelf: 'flex-end'}}
    />
  );
}
