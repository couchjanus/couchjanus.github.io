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
		category: 1,
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
		category: 4,
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
		category: 4,
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
		category: 1,
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
		category: 5,
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
		category: 1,
	},

];



let categories = [
	{
		id: 1,
		image: "https://couchjanus.github.io/images/product-1.jpg",
		section: "Electronics",
    name: "Headphones"
	},
	{
    id: 2,
    name: "Bags",
		image: "https://couchjanus.github.io/images/product-2.jpg",
		section: "Health & Beauty",
	},
	{
		id: 3,
		image: "https://couchjanus.github.io/images/product-3.jpg",
		name: "T-Shirts",
    section: "Fashion & Acc"
	},
	{
		id: 4,
		image: "https://couchjanus.github.io/images/product-4.jpg",
		name: "Smartwatches",
    section: "Electronics"
	},
	{
		id: 5,
		image: "https://couchjanus.github.io/images/product-5.jpg",
		name: "Shoes",
    section: "Fashion & Acc"
	},

	{
		id: 6,
		image: "https://couchjanus.github.io/images/product-7.jpg",
		name: "Parphume",
    section: "Health & Beauty"
	},
	{
		id: 7,
		image: "https://couchjanus.github.io/images/product-9.jpg",
		name: "Watches",
    section: "Health & Beauty",
	},

	{
		id: 8,
		image: "https://couchjanus.github.io/images/product-8.jpg",
		name: "Apple Watch",
    section: "Electronics"
	},
                      
	{
		id: 9,
		image: "https://couchjanus.github.io/images/product-9.jpg",
		name: "Byron Watch",
    section: "Health & Beauty"
	},
                   
	{
		id: 10,
		image: "https://couchjanus.github.io/images/product-10.jpg",
		name: "Camera",
    section: "Electronics"
	},
	{
		id: 11,
		image: "https://couchjanus.github.io/images/product-11.jpg",
		name: "Nike shoes",
    section: "Fashion & Acc"
	},

	{
		id: 12,
		image: "https://couchjanus.github.io/images/product-12.jpg",
		name: "DSLR lense",
    section: "Electronics"
	},

];
