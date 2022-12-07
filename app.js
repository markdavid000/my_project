const data = [
    {
        name: 'Påül Gøñ Vîräl',
        age: 19,
        gender: 'male',
        lookingfor: 'female',
        location: 'Ikom CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/312534911_150362297701685_8975440164369597129_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=k_SJSONnPiwAX9xalv6&tn=V6CPcFqFs5BVNLq9&_nc_ht=scontent-los2-1.xx&oh=00_AfCZHymXeeregi9_gndsRf7Djr64-tlG5XW8rUrV5PeUOw&oe=6395B7AF',
        link: 'Påül Gøñ Vîräl'
    },
    {
        name: 'Best Amaka',
        age: 18,
        gender: 'female',
        lookingfor: 'male',
        location: 'Etomi CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/316279686_154232027314712_2953856727645225720_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=iETrt78gKOMAX-s83IW&tn=V6CPcFqFs5BVNLq9&_nc_ht=scontent-los2-1.xx&oh=00_AfC0nA1hElHRLD_yB8GubrrhjYxMIk0yzTpglwRClgxMkA&oe=6394A0BF',
        link: 'Best Amaka'
    },
    {
        name: 'Nhelson Emmanuel',
        age: 18,
        gender: 'male',
        lookingfor: 'female',
        location: 'Ikom CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/318311722_164268752965254_3173577198721323615_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3G5P6ZtfSBoAX-iOHzV&_nc_ht=scontent-los2-1.xx&oh=00_AfBFjN3HwvJG5BBBdKdQque3twmJKomzezjWvglJUhOoVg&oe=639568EB',
        link: 'Nhelson Emmanuel'
    },
    {
        name: 'Gí Ft',
        age: 16,
        gender: 'female',
        lookingfor: 'male',
        location: 'Ikom CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/311767128_146933484711233_335534813869917059_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=gmiDu_UhD3wAX9SGqLW&_nc_oc=AQkWhk_tGsdvHH5vWokhAMKlbSBBoxd6ZLyQXkzVGie-Yw_tH9SXMcWMyzotpyevgH0&_nc_ht=scontent-los2-1.xx&oh=00_AfD9ydEbIE3re5TkZttiZ8_gGI--7O1vlP_oeiSCFKmxFQ&oe=6396749E',
        link: 'Gí Ft'
    },
    {
        name: 'Mark David',
        age: 19,
        gender: 'male',
        lookingfor: 'female',
        location: 'Abuja FCT',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/317270492_155922560478992_5009067007263211504_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=HPLsWcBWUIsAX9KG8ne&_nc_ht=scontent-los2-1.xx&oh=00_AfDr_sLpgJ3T1rEBYfhHyRep7xZ2crd5gU9aqxd03ovsNg&oe=6396566F',
        link: 'Mark David'
    },
    {
        name: 'Prë Çïøus',
        age: 17,
        gender: 'female',
        lookingfor: 'male',
        location: 'Obudu CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/313416793_152115574193024_8525438053184744007_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=72-OiP6oecUAX8JStmh&_nc_ht=scontent-los2-1.xx&oh=00_AfDZZGVMsnNujayk-CiO4GAwz_wgKjCjEW3BiJwmnxWK0g&oe=63962767',
        link: 'Prë Çïøus'
    },
    {
        name: 'Øphì Mãn Dèx',
        age: 19,
        gender: 'male',
        lookingfor: 'female',
        location: 'Abuja FCT',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/275695277_650243815943381_817496535396360207_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lPMx7labqowAX9ApAai&tn=V6CPcFqFs5BVNLq9&_nc_ht=scontent-los2-1.xx&oh=00_AfC2rdCDVe11mneVBHOoeSJ6y-PwDdE8zTIVod9InpWTqA&oe=6395A242',
        link: 'Øphì Mãn Dèx'
    },
    {
        name: 'Prin Cess',
        age: 18,
        gender: 'female',
        lookingfor: 'male',
        location: 'Calabar CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/316935156_197259756156712_7588746706231298455_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Dac5kBqOA58AX9opiqh&_nc_ht=scontent-los2-1.xx&oh=00_AfDPzisL5hmsVGBthc3Ucr44y2u7hTOqTnSU6AxAfRxb1g&oe=63956F56',
        link: 'Prin Cess'
    },
    {
        name: 'Nkpe John',
        age: 18,
        gender: 'male',
        lookingfor: 'female',
        location: 'Obudu CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/280633575_114364947939270_5815356237174618291_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wSswkDV6QDcAX-FXCk4&tn=V6CPcFqFs5BVNLq9&_nc_ht=scontent-los2-1.xx&oh=00_AfA4nosNUDzqCwGayUXuBcYwuN7lMG-onOYWGv7J4gVAww&oe=63955D26',
        link: 'Nkpe John'
    },
    {
        name: 'Pell Berry',
        age: 18,
        gender: 'female',
        lookingfor: 'male',
        location: 'Ikom CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/282767096_120791383958207_3264412456096047555_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=19026a&_nc_ohc=Hr00MWj-nwkAX_qI9e6&tn=V6CPcFqFs5BVNLq9&_nc_ht=scontent-los2-1.xx&oh=00_AfDX6HoFQCI8RRy5MGOinqVSsQSMzvcRu8FL_nSCRKwicQ&oe=63955B5D',
        link: 'Pell Berry'
    },
    {
        name: 'Love Stra',
        age: 20,
        gender: 'male',
        lookingfor: 'female',
        location: 'Ikom CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/294198976_142905381691074_4949252273627474853_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nNWD88W3nkoAX91pgOv&_nc_ht=scontent-los2-1.xx&oh=00_AfBWKo-xm13GK7XD2uFx7DpKy_FOnN9AWzQCjYOZ1i7a1Q&oe=63961CCA',
        link: 'Love Stra'
    },
    {
        name: 'Debbi Fwesh',
        age: 18,
        gender: 'female',
        lookingfor: 'male',
        location: 'Ikom CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/294676561_145772181419284_3458556695157559857_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=LCTiNozPRBAAX-sO_wH&_nc_ht=scontent-los2-1.xx&oh=00_AfBRK3tVPjcH4HtQlTxC9SXqsGyzdhj_avr8GeLKudxMRQ&oe=6395E663',
        link: 'Debbi Fwesh'
    },
    {
        name: 'Emechebe Anthony',
        age: 18,
        gender: 'male',
        lookingfor: 'female',
        location: 'Ikom CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/281100694_481558903734815_7213760448178272299_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2MlPutUSY3QAX_sAXkF&_nc_ht=scontent-los2-1.xx&oh=00_AfB9XZFbpDWOPontvZYy40X2fA-quO9EYmo-D9oedK49eg&oe=6395B32B',
        link: 'Emechebe Anthony'
    },
    {
        name: 'Ëssë Stëphanië',
        age: 17,
        gender: 'female',
        lookingfor: 'male',
        location: 'Calabar CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/316419063_662015005585227_7451546901682877013_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=HXmHw9HheTkAX-MWTQI&_nc_ht=scontent-los2-1.xx&oh=00_AfC_7Dxc7K86bCVSp9kxTAy05Zg8nW9eLZL8aNJ6L2XHVw&oe=6395F1E3',
        link: 'Ëssë Stëphanië'
    },
    {
        name: 'Gabriel Jñrr',
        age: 20,
        gender: 'male',
        lookingfor: 'female',
        location: 'Calabar CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/271190885_122600283591529_3370596410494928182_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=EzwPunLrJtkAX90-Huc&tn=V6CPcFqFs5BVNLq9&_nc_ht=scontent-los2-1.xx&oh=00_AfBONRRmCIA0-_iCPfnqnmWrmbaLlspuWk_k4PfiC06trA&oe=63966C55',
        link: 'Gabriel Jñrr'
    },
    {
        name: 'Chidinma Purity',
        age: 16,
        gender: 'female',
        lookingfor: 'male',
        location: 'Ikom CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/300730147_167950875777353_1018036130925716897_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l0-iI33Hb2oAX_akWhd&_nc_ht=scontent-los2-1.xx&oh=00_AfBMgIWULRQqoF2JarmFB4vpzxtiFoVJ192_xqakesK3OQ&oe=63953A7F',
        link: 'Chidinma Purity'
    },
    {
        name: 'Ottah Stanley',
        age: 16,
        gender: 'male',
        lookingfor: 'female',
        location: 'Ikom CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/299614374_148780324501638_4847988641781444693_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=19MLpPT3JPIAX9eIJOm&_nc_ht=scontent-los2-1.xx&oh=00_AfDFIncHnftOm20Hw1hWLh708lIodOJkWJWJceEmdaP0_w&oe=6394DCCA',
        link: 'Ottah Stanley'
    },
    {
        name: 'Precïous Løve',
        age: 16,
        gender: 'female',
        lookingfor: 'male',
        location: 'Ikom CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/306512173_178160631392915_7712095578049301090_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=RKGs6VaYDYsAX8TYO35&_nc_ht=scontent-los2-1.xx&oh=00_AfBsqTcclurYVud_JOvAYCVZFPeMiCgMHMii3Bcv5PcLcQ&oe=6394B009',
        link: 'Precïous Løve'
    },
    {
        name: 'Dës Ïrë',
        age: 17,
        gender: 'male',
        lookingfor: 'female',
        location: 'Ikom CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/305112025_480790257279169_2535089013256197865_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jge1iyHAbiUAX_HMMYX&_nc_ht=scontent-los2-1.xx&oh=00_AfCG7UjBYijA71Bb50aUMSFK_y9JM9_RlQRU7df93trPyA&oe=639550FA',
        link: 'Dës Ïrë'
    },
    {
        name: 'Mhiz Vera',
        age: 18,
        gender: 'female',
        lookingfor: 'male',
        location: 'Ikom CRS',
        image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/301623440_100508932799309_8841915182443127860_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pDU0geI8E6gAX_euG_T&_nc_ht=scontent-los2-1.xx&oh=00_AfA75JEVIvnAUe9piq-vCuu_mvnxldXkZgjFVJndlLueqg&oe=6396253B',
        link: 'Mhiz Vera'
    },
];

const profiles = profileIterator(data)

// Call first profile
nextProfile()

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value

    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Facebook Username: ${currentProfile.link}</li>
        </ul>   
    `;

    document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}" class="img-fluid" style="border-radius: 50%; border:2px solid white; width: 40%; height: 30%;">
    `;
    } else {
        // No more profiles
        window.location.reload();
    }
}

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true}
        }
    }
}