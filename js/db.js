let products = [
	{
		id: 1,
		badge: {
			title: "Sold",
			bg: "sold"	
		},
		image: "/images/product-1.jpg",
		name: "Kui Ye Chen’s AirPods",
		price: 21,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 2,
		category: 1,

	},
	{
		id: 2,
		badge: {
			title: "",
			bg: ""	
		},
		image: "/images/product-2.jpg",
		name: "Apple wireless keyboard",
		price: 30,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category: 2,
	},
	{
		id: 3,
		badge: {
			title: "New",
			bg: "new"	
		},
		image: "/images/product-3.jpg",
		name: "Cyan cotton t-shirt",
		price: 5,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 4,
		category:3,
	},
	{
		id: 4,
		badge: {
			title: "",
			bg: ""	
		},
		image: "/images/product-4.jpg",
		name: "Timex Unisex Originals",
		price: 51,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 1,
		category: 4,
	},
	{
		id: 5,
		badge: {
			title: "Sale",
			bg: "sale"	
		},
		image: "/images/product-5.jpg",
		name: "Red digital smartwatch",
		price: 10,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 0,
		category: 4,
	},

	{
		id: 6,
		badge: {
			title: "",
			bg: ""	
		},
		image: "/images/product-6.jpg",
		name: "Nike air max 95",
		price: 31,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category:  5,
	},
	{
		id: 7,
		badge: {
			title: "Sale",
			bg: "sale"
		},
		image: "/images/product-7.jpg",
		name: "Joemalone Women perfume",
		price: 35,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 4,
		category: 6,
	},

	{
		id: 8,
		badge: {
			title: "",
			bg: ""	
		},
		image: "/images/product-8.jpg",
		name: "Apple Watch",
		price: 25,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 3,
		category: 8,
	},
                      
	{
		id: 9,
		badge: {
			title: "Sold",
			bg: "sold"	
		},
		image: "/images/product-9.jpg",
		name: "Black Canon EOS camera",
		price: 24,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category: 12,
	},
                   
	{
		id: 10,
		badge: {
			title: "New",
			bg: "new"	
		},
		image: "/images/product-10.jpg",
		name: "Silver black round Ipod",
		price: 16,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 0,
		category: 10,
	},
	{
		id: 11,
		badge: {
			title: "Sale",
			bg: "sale"	
		},
		image: "/images/product-11.jpg",
		name: "Digital smartwatch",
		price: 13,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category: 11,
	},

	{
		id: 12,
		badge: {
			title: "New",
			bg: "new"	
		},
		image: "/images/product-12.jpg",
		name: "Black camera lens",
		price: 11,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 2,
		category: 9,
	},
	{
		id: 13,
		badge: {
			title: "Sale",
			bg: "sale"	
		},
		image: "/images/product-11.jpg",
		name: "Digital smartwatch",
		price: 13,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category: 7,
	},
];

let categories = [
	{
		id: 1,
		image: "/images/product-1.jpg",
		section: "Electronics",
    	name: "Headphone"
	},
	{
    	id: 2,
    	name: "Keyboard",
		image: "/images/product-2.jpg",
		section: "Electronics",
	},
	{
		id: 3,
		image: "/images/product-3.jpg",
		name: "T-Shirts",
    	section: "Fashion & Acc"
	},
	{
		id: 4,
		image: "/images/product-4.jpg",
		name: "Watches",
    	section: "Fashion & Acc"
	},
	{
		id: 5,
		image: "/images/product-5.jpg",
		name: "Shoes",
    	section: "Fashion & Acc"
	},

	{
		id: 6,
		image: "/images/product-7.jpg",
		name: "Perfume",
    	section: "Health & Beauty"
	},
	{
		id: 7,
		image: "/images/product-11.jpg",
		name: "Smartwatch",
    	section: "Health & Beauty",
	},

	{
		id: 8,
		image: "/images/product-8.jpg",
		name: "Apple Watch",
    	section: "Electronics"
	},
                      
	{
		id: 9,
		image: "/images/product-9.jpg",
		name: "Camera",
    	section: "Cameras"
	},
                   
	{
		id: 10,
		image: "/images/product-10.jpg",
		name: "Ipod",
    	section: "Electronics"
	},
	{
		id: 11,
		image: "/images/product-11.jpg",
		name: "Digital smartwatch",
    	section: "Fashion & Acc"
	},

	{
		id: 12,
		image: "/images/product-12.jpg",
		name: "Lens",
    	section: "Cameras"
	},

];
