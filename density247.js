// Fix map for IE
if (!('map' in Array.prototype)) { 
  Array.prototype.map = function (mapper, that /*opt*/) { 
    var other = new Array(this.length); 
    for (var i = 0, n = this.length; i < n; i++) 
      if (i in this) 
        other[i] = mapper.call(that, this[i], i, this); 
    return other; 
  }; 
};

var mapSVG = {
	states: ['all','B131', 'B130', 'B85', 'B134', 'B133', 'B132', 'B155', 'B139', 'B140', 'B23', 'B145', 'B148', 'B149', 'B147', 'B144', 'B125', 'B138', 'B153', 'B154', 'B150', 'B151', 'B152'],
	all: "M177.865,490.46l1.341-2.46l1.565-0.224l0.223,0.558l-1.453,2.125H177.865z  M184.908,487.889l4.248,1.788l1.454-0.225l1.118-2.683l-0.448-2.346l-2.907-0.338l-2.795,1.23L184.908,487.889L184.908,487.889z  M206.149,494.819l2.572,3.802l1.677-0.225l0.782-0.336l1.006,0.895l2.572-0.112l0.67-1.006l-2.012-1.23l-1.341-2.572l-1.454-2.458 l-4.024,2.012L206.149,494.819L206.149,494.819z M220.124,500.969l0.894-1.341l3.242,0.671l0.447-0.336l4.249,0.447l-0.225,0.894 l-1.788,1.007l-3.017-0.225L220.124,500.969z M223.813,504.546l1.342,2.685l2.125-0.784l0.223-1.118l-1.118-1.452l-2.572-0.225 V504.546L223.813,504.546z M228.62,503.763l1.565-2.011l3.242,1.676l3.019,0.784l3.018,1.9v1.341l-2.459,1.23l-3.355,0.67 l-1.677-1.005L228.62,503.763L228.62,503.763z M240.135,514.497l1.118-0.895l2.348,1.118l5.254,2.46l2.348,1.454l1.118,1.677 l1.342,3.018l2.795,1.79l-0.223,0.893l-2.684,2.237l-2.907,1.005l-1.005-0.447l-2.124,1.23l-1.677,2.237l-1.565,2.012l-1.23-0.112 l-2.46-1.788l-0.223-3.132l0.446-1.677l-1.119-3.912l-1.452-1.23l-0.112-1.787l1.565-0.672l1.454-2.125l0.335-0.67l-1.117-1.229 L240.135,514.497L240.135,514.497z",
	B131: "M177.865,490.46l1.341-2.46l1.565-0.224l0.223,0.558l-1.453,2.125H177.865z  M184.908,487.889l4.248,1.788l1.454-0.225l1.118-2.683l-0.448-2.346l-2.907-0.338l-2.795,1.23L184.908,487.889L184.908,487.889z  M206.149,494.819l2.572,3.802l1.677-0.225l0.782-0.336l1.006,0.895l2.572-0.112l0.67-1.006l-2.012-1.23l-1.341-2.572l-1.454-2.458 l-4.024,2.012L206.149,494.819L206.149,494.819z M220.124,500.969l0.894-1.341l3.242,0.671l0.447-0.336l4.249,0.447l-0.225,0.894 l-1.788,1.007l-3.017-0.225L220.124,500.969z M223.813,504.546l1.342,2.685l2.125-0.784l0.223-1.118l-1.118-1.452l-2.572-0.225 V504.546L223.813,504.546z M228.62,503.763l1.565-2.011l3.242,1.676l3.019,0.784l3.018,1.9v1.341l-2.459,1.23l-3.355,0.67 l-1.677-1.005L228.62,503.763L228.62,503.763z M240.135,514.497l1.118-0.895l2.348,1.118l5.254,2.46l2.348,1.454l1.118,1.677 l1.342,3.018l2.795,1.79l-0.223,0.893l-2.684,2.237l-2.907,1.005l-1.005-0.447l-2.124,1.23l-1.677,2.237l-1.565,2.012l-1.23-0.112 l-2.46-1.788l-0.223-3.132l0.446-1.677l-1.119-3.912l-1.452-1.23l-0.112-1.787l1.565-0.672l1.454-2.125l0.335-0.67l-1.117-1.229 L240.135,514.497L240.135,514.497z",
	B130: "M125.991,445.07l-0.223,59.029l1.117,0.672l2.125,0.11l1.006-0.782h1.789 l0.111,2.013l4.808,4.696l0.335,1.787l2.348-1.339l0.447-0.112l0.224-2.124l1.006-1.118l0.782-0.112l1.342-1.005l2.124,1.453 l0.447,2.012l1.342,0.782l0.782,1.678l2.684,1.229l2.347,4.137l1.9,2.682l1.565,1.902l1.006,2.57l3.465,1.229l3.577,1.456 l0.671,3.017l0.335,2.124l-0.67,2.348l-1.23,1.565l-1.118-0.558l-1.006-2.124l-1.9-1.008l-1.23-0.781l-0.559,0.558l1.006,1.9 l0.112,2.572l-0.782,0.336l-1.342-1.343l-1.453-0.892l0.335,1.118l0.895,1.23l-0.559,0.557c0,0-0.559-0.223-0.895-0.67 c-0.335-0.448-1.453-2.349-1.453-2.349l-0.671-1.564c0,0-0.224,0.895-0.67,0.671c-0.447-0.225-0.895-1.006-0.895-1.006l1.23-1.342 l-1.006-1.007V527.8h-0.559l-0.559,2.347l-0.782,0.336l-0.671-2.57l-0.447-2.572l-0.559-0.335l0.224,3.911v0.784l-1.006-0.895 l-2.46-4.134l-1.454-0.337l-0.447-2.571l-1.118-2.012l-1.118-0.783v-1.565l1.453-0.893l-0.335-0.225l-1.789,0.446l-2.347-1.676 l-1.79-2.012l-3.354-1.788l-2.795-1.789l0.894-2.235v-1.119l-1.229,1.119l-2.013,0.782l-2.571-0.782l-3.913-1.677h-3.802 l-0.447,0.335l-4.472-2.684l-1.453-0.223l-1.901-4.025l-2.459,0.223l-2.46,1.007l0.335,3.13l0.783-2.013l0.67,0.225l-1.005,3.018 l2.236-1.9l0.447,1.117l-2.682,3.02l-0.896-0.225l-0.335-1.342l-0.895-0.558l-0.894,0.783l-1.9-1.229l-2.124,1.452l-1.23,1.454 l-2.348,1.454l-3.243-0.112l-0.334-1.453l2.571-0.447v-0.895l-1.565-0.447l0.67-1.676l1.565-2.684v-1.229l0.111-0.558l3.019-1.566 l0.671,0.894h1.9l-0.894-1.788l-2.571-0.224l-3.466,1.901l-1.677,2.347l-1.229,1.788l-0.782,1.566l-2.907,1.007l-2.124,1.789 l-0.224,1.117l1.565,0.671l0.559,1.454l-1.9,2.236l-4.472,2.907l-5.365,2.907l-1.454,0.781l-3.689,0.784l-3.689,1.564l1.23,0.895 l-1.006,1.005l-0.335,0.784l-1.9-0.673l-2.235,0.112l-0.559,1.565h-0.671l0.223-1.677l-2.459,0.895l-2.012,0.671l-2.348-0.893 l-2.012,1.34h-2.236l-1.454,0.894l-1.118,0.559l-1.454-0.225l-1.789-0.782l-1.565,0.447l-0.67,0.67l-1.118-0.781v-1.34l2.124-0.895 l4.361,0.447l3.018-1.119l1.454-1.453l2.013-0.448l1.229-0.559l1.901,0.112l1.118,0.895l0.671-0.224l1.565-1.902l2.124-0.671 l2.348-0.446l0.894-0.223l0.448,0.335h0.559l0.894-2.571l2.795-1.005l1.341-2.572l1.565-3.13l1.118-1.007l0.224-1.789l-1.118,0.895 l-2.348,0.446l-0.447-1.676l-0.894-0.224l-0.671,0.671l-0.112,2.012l-1.006-0.112l-1.006-4.024l-0.895,0.894l-0.782-0.335 l-0.224-1.342l-2.795,0.111l-1.453,0.783l-1.789-0.223l1.007-1.007l0.335-1.788l-0.448-1.341l1.006-0.671l0.894-0.113l-0.447-1.229 v-3.019l-0.671-0.67l-0.559,1.005h-4.248l-1.006-0.893l-0.448-2.683l-1.453-2.461v-0.67l1.453-0.559l0.112-1.454l0.783-0.782 l-0.559-0.335l-0.895,0.335l-0.782-1.902l0.671-3.465l3.13-2.236l1.789-1.119l1.342-2.569l1.9-0.895l1.789,0.783l0.223,1.676 l1.677-0.225l2.236-1.676l1.118,0.446l0.671,0.448h1.118l1.565-0.894l0.559-3.019c0,0,0.224-2.012,0.671-2.347 c0.447-0.337,0.67-0.672,0.67-0.672l-0.782-1.341l-1.789,0.558l-2.236,0.56l-1.341-0.336l-2.46-1.23l-3.465-0.111l-2.46-2.572 l0.335-2.683l0.447-1.676l-1.454-1.23l-1.341-2.572l0.335-0.557l4.695-0.335h1.453l0.671,0.67h0.448l-0.112-1.118l2.683-0.447 l1.789,0.223l1.006,0.783l-1.006,1.454l-0.335,1.006l1.9,1.119l3.466,1.228l1.23-0.67l-1.565-3.018l-0.671-2.237l0.671-0.559 l-2.348-1.341l-0.335-0.782l0.335-1.119l-0.559-2.683l-2.012-3.241l-1.677-2.908l2.013-1.342h2.236l1.23,0.448l2.906-0.111 l2.572-2.459l0.783-2.124l2.571-1.678l1.118,0.672l1.901-0.448l2.571-1.454l0.783-0.111l0.67,0.56l3.13-0.112l1.9-2.124h0.783 l2.459,1.676l1.342,1.456l-0.335,0.781l0.447,0.783l1.118-1.118l2.683,0.223l0.224,2.572l1.342,1.006l4.919,0.447l4.36,2.907 l1.006-0.671l3.577,1.788l1.453-0.447l1.342-0.557l3.354,1.34l3.018,2.014V445.07z M46.392,465.082l1.453,3.688l-0.112,0.671 l-2.013-0.223l-1.229-2.794l-1.23-1.007h-1.677l-0.111-1.788l1.23-1.678l0.782,1.678l1.006,1.006L46.392,465.082z M44.603,488.224 l2.572,0.559l2.571,0.67l0.559,0.673l-1.118,2.57l-2.125-0.11l-2.348-2.459L44.603,488.224z M30.292,478.497l0.783,1.79 l0.782,1.117l-0.782,0.559l-1.454-2.124v-1.342H30.292z M20.79,529.03l2.348-1.565l2.347-0.673l1.789,0.226l0.335,1.118 l1.341,0.335l1.341-1.34l-0.224-1.119l1.9-0.448l2.013,1.789l-0.782,1.23l-3.019,0.783l-1.9-0.336l-2.572-0.782l-3.018,1.005 l-1.118,0.224L20.79,529.03z M54.664,525.9l1.118,1.34l1.453-1.118l-1.006-0.894L54.664,525.9z M56.676,528.023l0.783-1.566 l1.453,0.225l-0.559,1.341H56.676z M72.999,526.682l1.006,1.231l0.67-0.783l-0.559-1.342L72.999,526.682z M79.036,518.075 l0.783,4.024l2.013,0.559l3.465-2.012l3.019-1.79l-1.118-1.676l0.335-1.677l-1.453,0.894l-2.012-0.559l1.118-0.782l1.342,0.559 l2.682-1.23l0.336-1.006l-1.677-0.557l0.559-1.343l-1.9,1.343l-3.242,2.459l-3.354,2.012L79.036,518.075z M108.327,504.323 l1.677-1.007l-0.67-1.23l-1.23,0.672L108.327,504.323z",
	B85: "M539.191,438.81l1.444,5.672l2.581,6.737l3.689,6.485l2.57,4.36l3.356,3.802 l2.795,2.569l1.118,2.013l-0.784,0.894l-0.557,0.895l2.011,5.141l2.013,2.013l1.789,3.689l2.458,4.024l3.131,5.702l0.896,5.256 l0.336,8.272l0.446,1.23l-0.226,2.348l-1.674,0.894l0.223,1.342l-0.446,1.341l0.224,1.676l0.333,1.342l-1.9,2.237l-2.124,1.005 l-2.682,0.112l-1.008,1.118l-1.676,0.671l-0.895-0.336l-0.783-0.67l-0.223-2.013l-0.559-2.347l-2.349-3.578l-2.458-1.566 l-2.683-0.223l-0.56,0.895l-2.124-3.02l-0.446-2.46l-1.79-2.795l-1.229-0.782l-1.118,1.454l-1.229-0.224l-1.455-3.467l-2.012-2.683 l-2.012-3.688l-1.788-2.125l-2.46-2.57l1.452-1.677l2.235-3.802l-0.111-1.117l-3.131-0.67l-1.116,0.447l0.223,0.445l1.788,0.672 l-1.004,3.13l-0.56,0.336l-1.229-2.794l-0.894-3.355l-0.225-1.9l1.005-3.242v-6.596l-2.122-2.57l-0.896-2.123l-3.578-0.895 l-1.343-0.448l-1.116-1.788l-2.348-1.119l-0.783-2.347l-1.9-0.671l-1.677-2.571l-2.907-1.007l-2.012-1.007h-1.788l-2.796,0.559 l-0.113,1.339l0.561,0.673l-0.336,0.783l-2.123-0.112l-2.572,2.459l-2.46,1.341h-2.682l-2.237,0.894l-0.224-1.901l-1.118-1.341 l-2.013-0.783l-1.118-1.006l-5.589-2.684l-5.255-1.229l-3.017,0.447l-4.138,0.337l-4.137,1.453l-2.405,0.423l-0.163-5.567 l-1.79-1.341l-1.229-1.228l0.223-2.125l7.044-0.895l17.665-2.012l4.695-0.447l4.247-0.11l1.79,2.682l1.006,1.006l5.478,0.112 l7.482-0.446l14.876-0.895l3.767-0.465l3.165,0.019l0.111,2.012l1.79,0.558l0.223-3.018l-1.117-3.132l0.782-1.118l4.027,0.56 L539.191,438.81L539.191,438.81z M547.745,530.987l1.676-0.447l0.896-0.167l1.004-1.622l1.622-1.118l0.895,0.335l1.175,0.226 l0.28,0.724l-2.406,0.84l-2.906,1.006l-1.621,0.84L547.745,530.987z M557.078,527.52l0.84,0.728l1.9-1.454l3.69-2.906l2.57-2.685 l1.735-4.583l0.67-1.175l0.113-2.346l-0.505,0.334l-0.67,1.957l-1.006,3.186l-2.235,3.634l-3.018,2.907l-2.347,1.339 L557.078,527.52z",
	B134: "M543.103,416.897l-1.229,0.671l-1.788-0.893l-0.448-1.455l-0.893-2.459 l-1.565-1.453l-1.79-0.448l-1.116-3.353l-1.901-4.136l-2.906-1.341l-1.454-1.341l-0.894-1.789l-1.454-1.34l-1.565-0.895 l-1.565-2.011l-2.125-1.566l-3.131-1.229l-0.333-1.007l-1.677-2.013l-0.335-1.005l-2.347-3.579l-2.35,0.112l-2.793-1.676 l-0.896-0.893l-0.224-1.23l0.56-1.342l1.565-0.673l-0.225-1.452l4.246-1.789l6.262-3.131l5.031-0.558l11.404-0.335l1.565,1.341 l1.118,2.238l3.017-0.338l8.72-1.006l2.013,0.558l8.719,5.256l6.991,5.616l-3.749,3.774l-1.788,4.248l-0.335,4.361l-1.118,0.559 l-0.782,1.899l-1.676,0.447l-1.455,2.46l-1.9,1.902l-1.565,2.348l-1.118,0.557l-2.46,2.349l-2.011,0.111l0.671,2.237l-3.465,3.801 L543.103,416.897L543.103,416.897z",
	B133: "M493.578,378.887l-3.354,0.558l-5.815,0.782l-5.924,0.616v1.51l0.112,1.455 l0.447,2.347l2.347,5.478l1.677,6.819l1.006,4.249l1.118,3.354l1.006,4.806l1.452,4.36l1.79,2.348l0.335,2.35l1.342,0.557 l0.112,1.455l-1.23,3.352l-0.335,2.237l-0.111,1.341l1.117,3.019l0.223,3.689l-0.557,1.677l0.446,0.559l1.006,0.558l0.445,2.347 l1.79,2.684l1.006,1.006l5.478,0.112l7.482-0.446l14.876-0.895l3.767-0.465l3.165,0.017l0.111,2.014l1.79,0.558l0.223-3.018 l-1.117-3.132l0.782-1.118l4.027,0.56l3.442,0.219l-0.539-4.356l1.566-6.931l1.005-2.907l-0.335-1.788l2.796-4.807l-0.416-1.12 l-1.261,0.671l-1.788-0.893l-0.448-1.455l-0.893-2.459l-1.565-1.453l-1.79-0.448l-1.116-3.353l-1.901-4.136l-2.906-1.341 l-1.454-1.341l-0.894-1.789l-1.454-1.34l-1.565-0.895l-1.565-2.011l-2.125-1.566l-3.131-1.229l-0.333-1.007l-1.677-2.013 l-0.335-1.005l-2.347-3.579l-2.35,0.112l-2.793-1.676l-0.896-0.895l-0.224-1.23l0.56-1.34l1.565-0.673l-0.113-1.579l-1.229,0.351 l-4.027,0.67l-4.805,0.558L493.578,378.887L493.578,378.887z",
	B132: "M449.306,454.127l-1.118-10.51l-1.9-12.968l0.112-9.725l0.559-21.465 l-0.111-11.517l0.115-4.438l5.363-0.255l19.228-1.789l7.034-0.616l-0.102,1.51l0.112,1.453l0.447,2.349l2.347,5.478l1.677,6.819 l1.006,4.249l1.118,3.354l1.006,4.806l1.452,4.36l1.79,2.348l0.335,2.35l1.342,0.557l0.112,1.455l-1.23,3.352l-0.335,2.237 l-0.111,1.341l1.117,3.019l0.223,3.689l-0.557,1.677l0.446,0.559l1.006,0.558l0.558,2.459h-4.36l-4.695,0.447l-17.665,2.012 l-7.044,0.895l-0.223,2.125l1.229,1.228l1.79,1.341l0.402,5.488l-4.539,1.78l-1.902-0.225l1.902-1.34v-0.672l-2.125-4.136 l-1.565-0.448l-1.006,3.02l-0.896,1.9l-0.445-0.111H449.306L449.306,454.127z",
	B155: "M592.116,337.739l1.182,3.249l2.461,4.472l1.677,1.677l0.446,1.565l-1.676,0.112 l0.559,0.448l-0.225,2.906l-1.789,0.893l-0.446,1.455l-0.896,2.013l-2.57,1.117l-1.677-0.223l-1.006-0.112l-1.118-0.895 l0.224,0.895v0.67h1.343l0.558,0.895l-1.342,4.36h2.908l0.445,1.119l1.565-1.565l0.895-0.336l-1.341,2.46l-2.126,3.354h-0.894 l-0.782-0.335l-1.902,0.448l-3.576,1.677l-4.473,3.689l-2.348,3.241l-1.341,4.473l-0.335,1.675l-3.242,0.337l-4.076,1.534 l-6.878-5.671l-8.721-5.255l-2.013-0.558l-8.72,1.006l-3.017,0.338l-1.118-2.238l-1.565-1.341l-11.404,0.333l-5.031,0.56 l-6.262,3.131l-4.246,1.789l-1.117,0.224l-4.027,0.67l-4.805,0.558l-4.696,0.337l0.223-3.353l1.231-1.007l1.9-0.447l0.447-2.57 l2.906-1.902l2.685-1.005l2.907-2.461l3.016-1.453l0.448-2.123l2.683-2.685l0.445-0.111c0,0,0,0.783,0.561,0.783 c0.56,0,1.341,0.223,1.341,0.223l1.566-2.459l1.452-0.448l1.565,0.225l1.12-2.46l2.011-1.79l0.337-1.453v-2.739l3.13,0.504 l4.934-0.893l10.94-1.342l11.851-1.79l14.247-2.607l13.255-2.645l7.938-2.012L592.116,337.739L592.116,337.739z M594.81,360.551 l1.789-1.732l2.181-1.789l1.061-0.447l0.112-1.397l-0.445-4.249l-1.007-1.622l-0.447-1.285l0.503-0.167l1.902,3.802l0.279,3.074 l-0.113,2.348l-2.347,1.062l-1.957,1.677l-0.782,0.838L594.81,360.551z",
	B139: "M498.722,353.061l-35.889,3.468l-10.898,1.23l-3.195,0.354l-2.676-0.018v2.681 l-5.813,0.335l-4.808,0.448l-7.673,0.037l-0.183,4.036l-1.479,4.339l-0.687,2.087l-0.932,3.03l-0.224,1.788l-2.795,1.565 l1.004,2.46l-0.671,3.018l-1.061,1.174l5.645-0.056l16.658-1.34l3.69-0.113l5.59-0.335l19.228-1.789l7.034-0.558l5.821-0.673 l5.815-0.782l3.354-0.558l0.223-3.353l1.231-1.007l1.9-0.447l0.447-2.57l2.906-1.902l2.685-1.005l2.907-2.461l3.016-1.453 l0.448-2.123l2.683-2.685l0.445-0.111c0,0,0,0.783,0.561,0.783c0.56,0,1.341,0.223,1.341,0.223l1.566-2.459l1.452-0.448 l1.565,0.225l1.12-2.46l2.011-1.79l0.337-1.453l0.122-2.72l-1.576,0.037l-1.677,1.341l-5.478,0.114l-8.296,1.313L498.722,353.061 L498.722,353.061z",
	B140: "M621.136,255.688l-0.333-2.908l-0.557-3.019l-1.175-4.08l3.967-1.063l1.119,0.782 l2.347,3.019l2.012,3.075l-2.013,1.062l-0.895-0.111l-0.782,1.229l-1.677,1.342L621.136,255.688L621.136,255.688z",
	B23: "M621.473,255.688l-0.671-2.908l-0.557-3.019l-1.119-4.136l-3.577,0.782 l-15.093,3.298l0.448,2.292l1.005,5.031v5.59l-0.784,1.565l1.268,1.458l3.428-2.352l2.458-2.236l1.344-1.454l0.558,0.448 l1.899-1.007l3.578-0.782L621.473,255.688L621.473,255.688z",
	B145: "M639.052,251.558l1.502-0.474l0.316-1.187l0.711,0.079l0.713,1.581l-0.868,0.316 l-2.689,0.079L639.052,251.558L639.052,251.558z M632.571,252.111l1.581-1.818h1.106l1.265,1.028l-1.659,0.711l-1.503,0.712 L632.571,252.111L632.571,252.111z M608.505,236.905l12.075-2.907l1.565-0.447l1.455-2.237l2.583-1.15l1.999,3.052l-1.677,3.577 l-0.225,1.006l1.342,1.789l0.784-0.559h1.23l1.565,1.788l2.683,4.136l2.459,0.335l1.565-0.671l1.229-1.229l-0.559-1.901 l-1.454-1.118l-1.004,0.559l-0.67-0.894l0.333-0.335l1.453-0.112l1.23,0.559l1.341,1.677l0.671,2.012l0.225,1.677l-2.905,1.007 l-2.685,1.341l-2.683,3.13l-1.342,1.006v-0.671l1.676-1.007l0.336-1.23l-0.558-2.124l-2.013,1.006l-0.557,1.007l0.333,1.565 l-1.9,1.006l-1.9-3.13l-2.347-3.019l-1.119-0.782l-3.967,1.063l-3.522,0.726l-15.093,3.298l-0.671-3.968l0.447-7.323l3.579-0.615 L608.505,236.905",
	B148: "M655.123,184.809l1.343,1.453l1.565,2.571v1.342l-1.454,3.242l-1.343,0.447 l-2.347,2.124l-3.354,3.801c0,0-0.447,0-0.894,0c-0.449,0-0.672-1.454-0.672-1.454l-1.229,0.112l-0.671,1.006l-1.678,1.006 l-0.67,1.007l1.119,1.007l-0.335,0.447l-0.337,1.9l-1.34-0.112v-1.118l-0.225-0.894l-1.005,0.224l-1.23-2.236l-1.454,0.894 l0.894,1.006l0.226,0.783l-0.559,0.894l0.223,2.124l0.111,1.118l-1.117,1.788l-2.013,0.336l-0.224,2.012l-3.689,2.124l-0.894,0.336 l-1.118-1.006l-2.124,2.46l0.67,2.236l-1.006,0.894l-0.111,3.019l-1.091,5.271l-1.703-0.799l-0.336-2.124l-2.684-0.782 l-0.223-1.901l-5.03-16.21l-3.297-10.218l1.69-0.239l1.046,0.284v-1.788l0.56-3.801l1.787-3.243l1.006-2.794l-1.342-1.678v-4.136 l0.559-0.671l0.56-1.901l-0.111-1.006l-0.114-3.354l1.23-3.354l2.013-6.148l1.454-2.906h0.894l0.895,0.111v0.782l0.896,1.565 l1.899,0.448l0.559-0.559v-0.671l2.795-2.013l1.229-1.23l1.006,0.112l4.137,1.677l1.341,0.671l6.262,20.683h4.136l0.558,1.341 l0.114,3.354l2.011,1.565h0.559l0.113-0.335l-0.335-0.782L655.123,184.809L655.123,184.809z M640.646,205.658l1.064-1.063 l0.951,0.727l0.391,1.677l-1.175,0.615L640.646,205.658L640.646,205.658z M645.287,201.577l1.231,1.285 c0,0,0.893,0.057,0.893-0.167c0-0.223,0.167-1.397,0.167-1.397l0.617-0.559l-0.56-1.23l-1.397,0.503L645.287,201.577z",
	B149: "M626.183,230.138l0.208-1.058l0.754-2.276l-1.758-0.632l-0.336-2.124 l-2.684-0.782l-0.223-1.901l-5.03-16.21l-3.183-10.058l-0.62-0.003l-0.447,1.118l-0.448-0.335l-0.67-0.671l-1.006,1.342 l-0.661,3.794l0.218,3.919l1.34,1.9v2.795l-2.572,2.795l-1.79,0.782v0.783l0.784,1.23v5.925l-0.559,6.372l-0.111,3.354l0.67,0.894 l-0.112,3.13l-0.335,1.23l1.008,1.398l11.961-2.851l1.565-0.447l1.455-2.237L626.183,230.138L626.183,230.138z",
	B147: "M600.343,238.582l-0.558-3.913l-2.123-7.602l-0.449-0.225l-2.011-0.893 l0.558-2.013l-0.558-1.454l-1.79-3.13l0.672-2.684l-0.559-3.578l-1.676-4.471l-0.558-3.404l18.78-4.98l0.226,4.024l1.34,1.9v2.795 l-2.572,2.795l-1.79,0.782v0.783l0.784,1.23v5.926l-0.559,6.371l-0.111,3.354l0.67,0.894l-0.112,3.13l-0.335,1.23l1.008,1.398 l-4.807,0.95L600.343,238.582L600.343,238.582z",
	B144: "M589.389,262.954l-0.784-0.671l-1.787-0.111l-1.565-1.342l-1.677-3.688 l-2.077-0.644l-1.614-1.481l-12.854,2.794l-29.738,6.037l-6.148,1.007l-0.511-4.787l1.852-1.249l0.894-0.783l0.67-1.117 l1.229-0.782l1.343-1.23l0.335-1.118l1.454-1.901l0.782-0.67l-0.11-0.671l-0.895-2.124l-1.231-0.112l-1.341-4.248l2.012-1.23 l3.02-1.006l2.794-0.895l2.236-0.336l4.36-0.111l1.341,0.894l1.117,0.112l1.454-0.895l1.789-0.782l3.577-0.336l1.453-1.23 l1.23-2.236l1.119-1.341h1.453l1.34-0.783l0.113-1.565l-1.006-1.454l-0.223-1.006l0.783-1.454v-1.007h-1.231l-1.228-0.558 l-0.559-0.782l-0.113-1.788l4.026-3.801l0.445-0.559l1.007-2.013l2.013-3.131l1.901-2.57l1.453-1.678l1.669-1.262l2.131-0.861 l3.801-0.895l2.236,0.112l3.129-1.007l5.232-1.432l0.361,3.444l1.676,4.471l0.558,3.578l-0.671,2.684l1.79,3.13l0.558,1.454 l-0.558,2.013l2.011,0.893l0.449,0.225l2.123,7.602l0.335,3.577l-0.335,7.49l0.558,3.801l0.561,2.459l1.005,5.031v5.59 l-0.784,1.565l1.273,1.378l-0.155,1.082l-1.341,1.23l0.221,0.894l0.896-0.223l1.006-0.895l1.565-1.789l0.783-0.447l1.119,0.447 l1.565,0.112l5.478-2.683l2.011-1.901l0.896-1.006l2.906,1.118l-2.349,2.46l-2.682,2.013l-4.919,3.689l-1.79,0.671l-4.024,1.341 l-2.794,0.783l-1.049-0.369l-0.402-2.315l0.334-1.901l-0.114-1.453l-1.787-0.783l-3.13-0.671l-2.684-0.782L589.389,262.954 L589.389,262.954z",
	B125: "M589.389,262.954l-1.455,1.677v2.124l-1.341,2.124l-0.111,1.118l0.895,0.894 l-0.113,1.677l-1.566,0.782l0.56,1.901l0.113,0.782l1.9,0.224l0.672,1.789l2.458,1.676l1.677,1.118v0.559l-2.237,2.124 l-1.116,1.565l-1.006,1.9l-1.565,0.894l-0.838,0.503l-0.168,0.839l-0.422,1.803l0.756,1.552l2.235,2.012l3.354,1.565l2.796,0.447 l0.111,1.007l-0.557,0.67l0.223,1.9h0.559l1.452-1.677l0.56-3.354l1.901-2.795l2.124-4.472l0.783-3.801l-0.445-0.783l-0.115-6.484 l-1.116-2.348l-0.784,0.559l-1.899,0.224l-0.335-0.336l0.782-0.671l1.453-1.341l0.045-0.757l-0.264-2.374l0.334-1.901l-0.114-1.453 l-1.787-0.782l-3.13-0.671l-2.684-0.782L589.389,262.954L589.389,262.954z",
	B138: "M586.37,288.332l0.782-0.448l1.565-0.894l1.006-1.9l1.116-1.565l2.237-2.124 v-0.559l-1.677-1.118l-2.458-1.677l-0.672-1.789l-1.9-0.224l-0.113-0.782l-0.56-1.901l1.566-0.782l0.113-1.677l-0.895-0.895 l0.111-1.118l1.341-2.124v-2.124l1.622-1.677l-0.951-0.671l-1.787-0.111l-1.565-1.342l-1.677-3.689l-2.077-0.644l-1.614-1.481 l-12.854,2.794l-29.738,6.037l-6.148,1.007l-0.343-4.899l-3.794,3.893l-0.896,0.335l-2.906,2.081l2.013,13.235l1.168,7.434 l2.47,13.321l3.202-0.52l8.259-1.038l26.229-5.302l10.288-1.953l5.739-1.122l0.893-0.871l1.452-1.118H586.37L586.37,288.332z",
	B153: "M585.585,290.68l0.561-1.454l0.168-0.894h-1.398l-1.452,1.118l-1.008,1.006 l1.008,2.907l1.565,3.913l1.454,6.707l1.117,4.36l3.465-0.112l4.248-0.838l-1.566-5.087l-0.671,0.336l-2.458-1.677l-1.231-3.243 l-1.342-2.46l-1.565-0.671l-1.454-2.459L585.585,290.68L585.585,290.68z",
	B154: "M595.312,307.337l-4.247,0.894l-3.465,0.112l-1.117-4.36l-1.454-6.707 l-1.565-3.913l-0.893-3.042l-5.739,1.122l-10.288,1.953l-25.9,5.222l0.782,3.466l0.673,3.913l0.223-0.224l1.454-1.677l1.563-2.124 l1.677-0.111l1.007-1.007l1.23-1.789l0.894,0.448l2.014-0.224l1.787-1.454l1.388-1.006l1.277-0.334l1.14,0.781l2.01,1.007 l1.342,1.23l0.84,1.062l2.849,1.173v2.013l3.802,0.894l1.341,0.894l0.67-1.341l1.565,1.118l-1.004,2.236l-0.225,1.901l-1.229,1.789 v1.454l0.447,1.23l3.501,0.936l2.981-0.043l2.125,0.671l1.454,0.224l0.67-1.454l-1.006-1.453v-1.23l-1.677-1.453l-1.454-3.801 l0.896-3.689l-0.112-1.454l-0.895-0.894c0,0,1.006-1.118,1.006-1.565c0-0.448,0.336-1.454,0.336-1.454l1.341-0.894l1.343-1.118 l0.335,0.671l-1.006,1.118l-0.894,2.571l0.223,0.783l1.231,0.224l0.335,3.801l-1.453,0.671l0.224,2.46l0.334-0.112l0.782-1.342 l1.12,1.23l-1.12,0.895l-0.222,2.348l1.787,2.348l2.684,0.335l1.119-0.559l2.236,3.577l1.229,0.336v2.46l-1.566,3.352l-0.335,4.808 l1.006,2.348l1.006,0.112l1.341-2.907l0.56-2.459l0.111-4.919l2.126-3.355l1.453-4.807V307.337L595.312,307.337z M583.969,314.1 l0.781,1.733l0.112,1.229l0.782,1.286c0,0,0.616-0.614,0.616-0.839c0-0.223-0.504-2.124-0.504-2.124l-0.503-1.621L583.969,314.1z",
	B150: "M540.657,298.664l0.769,3.419l0.673,3.913l0.223-0.224l1.454-1.677l1.563-2.125 l1.677-0.111l1.007-1.007l1.23-1.789l0.894,0.448l2.014-0.224l1.787-1.454l1.388-1.006l1.277-0.334l1.14,0.781l2.01,1.007 l1.342,1.23l0.952,0.894l-0.727,3.466l-3.915-2.124l-3.129-1.23l-0.114,3.689l-0.333,1.453l-1.118,1.901l-0.445,1.118l-2.127,1.677 l-0.335,1.565l-2.347,0.223l-0.225,2.125l-0.781,3.801h-1.79l-0.894-0.56l-1.118-1.9l-1.231,0.112l-0.223,3.018l-1.453,4.584 l-3.467,7.491l0.56,0.895l-0.112,1.899l-1.455,1.342l-1.004-0.225l-2.237,1.678l-1.788-0.671l-1.231,3.241 c0,0-2.569,0.558-3.017,0.672c-0.446,0.112-1.677-0.895-1.677-0.895l-1.676,1.565l-1.789,0.447l-2.013-0.558l-0.896-0.894 l-1.515-2.091l-2.172-1.374l-1.791-1.901l-2.01-2.572l-0.446-1.565l-1.79-1.006l-0.559-1.118l-0.168-3.635l1.509-0.055l1.343-0.559 l0.112-1.901l1.118-1.006l0.111-3.466l0.672-2.683l0.893-0.447l0.894,0.782l0.336,1.23l1.229-0.671l0.336-1.117l-0.782-1.23v-1.677 l0.671-0.894l1.565-2.347l0.896-1.007l1.452,0.335l1.565-1.118l2.125-2.347l1.564-2.683l0.225-3.913l0.336-3.465v-3.243 l-0.782-2.124l0.67-1.006l0.887-0.895l2.414,13.712l3.202-0.52L540.657,298.664L540.657,298.664z",
	B151: "M516.608,336.852l1.34,2.459l0.896,0.894l2.013,0.558l1.789-0.446l1.676-1.566 c0,0,1.231,1.007,1.677,0.895c0.447-0.114,3.017-0.672,3.017-0.672l1.231-3.241l1.788,0.671l2.237-1.678l1.004,0.225l1.455-1.342 l0.112-1.899l-0.56-0.895l3.467-7.491l1.453-4.584l0.223-3.018l1.231-0.112l1.118,1.902l0.894,0.558h1.788l0.783-3.801l0.225-2.125 l2.347-0.223l0.335-1.565l2.127-1.677l0.445-1.118l1.118-1.901l0.333-1.453l0.114-3.689l3.129,1.23l3.915,2.124l0.557-3.522 l2.907,1.397v2.013l3.802,0.894l1.341,0.894l0.67-1.341l1.565,1.118l-1.004,2.236l-0.225,1.901l-1.229,1.789v1.454l0.447,1.23 l3.501,0.937l1.304,1.075l3.577,0.224l1.789,1.565l2.236,0.447l0.895,0.895l-0.337,3.131l0.672,0.67l0.112,1.565l0.895,1.452 l-0.113,1.231l-2.236-0.782v0.671l1.343,1.118v0.782l1.006,0.782l0.894,1.118l0.113,1.564l-1.565,1.007l0.224,0.335l1.787-0.335 l2.237-0.449l0.782-0.111l2.819,4.86l-3.378,1.178l-7.936,2.012l-13.255,2.645l-14.247,2.607l-11.851,1.79l-10.94,1.342 l-4.934,0.893l-3.12-0.426l-1.464-0.021l-1.676,1.341l-5.478,0.114l-8.296,1.313l-6.913,0.645l1.906-0.954l3.913-2.347l2.684-1.453 v-1.454l1.229-1.23l3.131-3.69l2.905-2.461L516.608,336.852L516.608,336.852z",
	B152: "M516.528,337.365l-2.157,2.168l-2.905,2.461l-3.131,3.69l-1.229,1.23v1.454 l-2.684,1.453l-3.913,2.347l-1.806,0.972l-35.871,3.389l-10.898,1.23l-3.195,0.354l-2.676-0.018v2.681l-5.813,0.335l-4.808,0.448 l-7.212,0.143l0.693-0.86l1.508-1.219l1.424-0.789l0.158-2.214l0.632-1.264l-1.109-1.756l0.553-1.318l1.566-1.231l1.452-0.446 l1.902,0.895l2.46,0.893l0.782-0.224l0.112-1.564l-0.894-1.678l0.223-1.565l1.343-1.006l1.786-0.448l1.12-0.447l-0.559-1.229 l-0.448-1.342l0.783-0.558l0.727-2.292l2.068-1.174l4.023-0.671l2.46-0.335l1.007,1.342l1.229,0.559l1.232-2.237l2.01-1.006 l1.344,1.118l0.558,0.781l1.452-0.335l-0.111-2.347l2.013-1.119l0.784-0.559l0.782,1.118h3.241l0.56-1.452l-0.224-1.566 l2.013-2.459l3.241-2.683l0.335-3.131l1.902-0.224l2.683-1.23l1.902-1.341l-0.225-1.341l-1.006-1.007l0.39-1.508l2.852-0.168 l1.676-0.558l2.012,1.117l1.119,3.019l4.025,0.225l1.229,1.229l1.452,0.112l1.679-1.006l2.125,0.335l0.893,1.006l1.902-1.788 l1.229-0.894h1.118l0.447,1.901l1.23,0.67l2.46,1.454l0.111,3.801l0.559,1.118l1.79,1.006l0.446,1.565l2.01,2.572l1.791,1.901 L516.528,337.365z"
}

var browser = BrowserDetect;

if (isOldBrowser()) {
	$('#old_browser_msg').show();
	$('#wtf').hide();
	$('fieldset#state').addClass('ff3');
	$('#ie8_percents').addClass('ff3');
	$('#share2').addClass('ff3');
	$('#poweredby.old_browsers').show();
}

var buckets = 11,
	colorScheme = 'rbow2',
	days = [
		{ name: 'Monday', abbr: 'Mo' },
		{ name: 'Tuesday', abbr: 'Tu' },
		{ name: 'Wednesday', abbr: 'We' },
		{ name: 'Thursday', abbr: 'Th' },
		{ name: 'Friday', abbr: 'Fr' },
		{ name: 'Saturday', abbr: 'Sa' },
		{ name: 'Sunday', abbr: 'Su' }
	],
	types = {
		all: 'All',
		fall: 'Fall',
		spring: 'Spring'
	},
	hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'],
	stateAbbrs = ['all', 'B131', 'B130', 'B85', 'B134', 'B133', 'B132', 'B155', 'B139', 'B140', 'B23', 'B145', 'B148', 'B149', 'B147', 'B144', 'B125', 'B138', 'B153', 'B154', 'B150', 'B151', 'B152'],
	states = {
		all: { name: 'All Libraries', abbr: 'all', offset: 0 },
		B131: { name: 'Butler 3', abbr: 'B131', offset: -1 },
		B130: { name: 'Butler 2', abbr: 'B130', offset: 2 },
		B85: { name: 'Roone Arledge', abbr: 'B85', offset: 2 },
		B134: { name: 'Butler 6', abbr: 'B134', offset: 0 },
		B133: { name: 'Butler 5', abbr: 'B133', offset: 0 },
		B155: { name: "JJ's Place", abbr: 'B155', offset: 1 },
		B139: { name: 'Lehman 2', abbr: 'B139', offset: 3 },
		B140: { name: 'Lehman 3', abbr: 'B140', offset: 3 },
		B23: { name: 'Uris', abbr: '23', offset: 3 },
		B145: { name: 'Sci & Eng Library', abbr: 'B145', offset: 3 },
		B148: { name: 'Avery 2', abbr: 'B148', offset: 3 },
		B149: { name: 'Avery 3', abbr: 'B149', offset: -3 },
		B147: { name: 'Avery 1', abbr: 'B147', offset: 2 },
		B144: { name: 'Starr East Asian', abbr: 'B144', offset: 1 },
		B125: { name: 'John Jay Dining Hall', abbr: 'B125', offset: 2 },
		B138: { name: 'Butler Stacks', abbr: 'B138', offset: 3 },
		B153: { name: 'Lerner 4', abbr: 'B153', offset: 2 },
		B154: { name: 'Lerner 5', abbr: 'B154', offset: 3 },
		B150: { name: 'Lerner 1', abbr: 'B150', offset: 2 },
		B151: { name: 'Lerner 2', abbr: 'B151', offset: 3 },
		B152: { name: 'Lerner 3', abbr: 'B152', offset: 3 }
	};
	
var data;

if (isOldBrowser() === false) {
	createMap();
}
addStateButtons();

d3.select('#vis').classed(colorScheme, true);

d3.json('sep.json', function(json) {
	
	data = json;

	createTiles();
	reColorTiles('all', 'all');
	
	if (isOldBrowser() === false) {
		drawMobilePie('all');
	}
		
	/* ************************** */
	
	// State map click events
	d3.selectAll('#map path.state').on('click', function() {
		var $sel = d3.select('path.state.sel'),
			prevState, currState;
				
		if ($sel.empty()) {
			prevState = '';
		} else {
			prevState = $sel.attr('id');
		}
		
		currState = d3.select(this).attr('id');
		
		if (prevState !== currState) {
			var type = d3.select('#type label.sel span').attr('class');
			reColorTiles(currState, type);
			drawMobilePie(currState);
		}
		
		d3.selectAll('#map path.state').classed('sel', false);
		d3.select(this).classed('sel', true);
		d3.select('#show_all_states').classed('sel', false);
		d3.select('#wtf h2').html(states[currState].name);
		d3.select('fieldset#state label.sel').classed('sel', false);
		d3.select('fieldset#state label[for="state_' + currState + '"]').classed('sel', true);
	});
	
	/* ************************** */
	
	// All, PC, Mobile control event listener
	$('input[name="type"]').change(function() {
		
		var type = $(this).val(),
			$sel = d3.select('#map path.state.sel');
		
		d3.selectAll('fieldset#type label').classed('sel', false);
		d3.select('label[for="type_' + type + '"]').classed('sel', true);
		
		if ($sel.empty()) {
			var state = 'all';
		} else {
			var state = $sel.attr('id');
		}
		
		reColorTiles(state, type);
		d3.select('#pc2mob').attr('class', type);
		
		var type = types[selectedType()];
		d3.select('#wtf .subtitle').html(type  + ' traffic daily');
	});
	
	/* ************************** */
	
	// All States click
	$('label[for="state_all"]').click(function() {
		
		d3.selectAll('fieldset#state label').classed('sel', false);
		$(this).addClass('sel');
		var type = d3.select('input[name="type"]').property('value');
		
		d3.selectAll('#map path.state').classed('sel', false);
		
		reColorTiles('all', type);
		drawMobilePie('all');
		
		d3.select('#wtf h2').html('All States');
	});
	
	/* ************************** */
	
	// Text States list event listener
	$('input[name="state"]').change(function() {
		
		var state = $(this).val(),
			type = d3.select('input[name="type"]').property('value');
		
		d3.selectAll('fieldset#state label').classed('sel', false);
		d3.select('label[for="state_' + state + '"]').classed('sel', true);
		
		reColorTiles(state, type);
		updateIE8percents(state);
	});

	/* ************************** */
	
	// tiles mouseover events
	$('#tiles td').hover(function() {
	
		$(this).addClass('sel');
		
		var tmp = $(this).attr('id').split('d').join('').split('h'),
			day = parseInt(tmp[0]),
			hour = parseInt(tmp[1]);
		
		var $sel = d3.select('#map path.state.sel');
		
		if ($sel.empty()) {
			var state = 'all';
		} else {
			var state = $sel.attr('id');
		}
		
		var view = 'all';
		
		if (isOldBrowser() === false) {
			drawHourlyChart(state, day);
			selectHourlyChartBar(hour);
		}
		
		var type = types[selectedType()];
		d3.select('#wtf .subtitle').html(type  + ' traffic on ' + days[day].name + 's');
	
	}, function() {
		
		$(this).removeClass('sel');
		
		var $sel = d3.select('#map path.state.sel');
		
		if ($sel.empty()) {
			var state = 'all';
		} else {
			var state = $sel.attr('id');
		}
		if (isOldBrowser() === false) {
			drawHourlyChart(state, 3);
		}
		var type = types[selectedType()];
		d3.select('#wtf .subtitle').html(type  + ' traffic daily');
	});
});

/* ************************** */

function isOldBrowser() {

	var result = false;
	if (browser.browser === 'Explorer' && browser.version < 9) {
		result = true;
	} else if (browser.browser === 'Firefox' && browser.version < 4) {
		result = true;
	}
	
	//console.log(result);
	
	return result;
}


/* ************************** */

function selectedType() {
	
	//return d3.select('input[name="type"]:checked').property('value'); // IE8 doesn't like this
	return $('input[name="type"]:checked').val();
}

/* ************************** */

function addStateButtons() {

	for (var i = 1; i < stateAbbrs.length; i++) {
		var abbr = stateAbbrs[i];
		var html = '<input type="radio" id="state_' + abbr + '" name="state" value="' + abbr + '"/><label for="state_' + abbr + '"><span class="' + abbr + '">' + abbr + '</span></label>';
	
		$('fieldset#state').append(html);
	}
}

/* ************************** */

function getCalcs(state, view) {
	
	var min = 1,
		max = -1;
	
	// calculate min + max
	for (var d = 0; d < data[state].views.length; d++) {
		for (var h = 0; h < data[state].views[d].length; h++) {
			
			if (view === 'all') {
				var tot = data[state].views[d][h].fall + data[state].views[d][h].spring;
			} else {
				var tot = data[state].views[d][h][view];
			}
			
			if (tot > max) {
				max = tot;
			}
			
			if (tot < min) {
				min = tot;
			}
		}
	}
	
	return {'min': min, 'max': max};
};

/* ************************** */

function reColorTiles(state, view) {
	
	var calcs = getCalcs(state, view),
		range = [];
	
	for (var i = 1; i <= buckets; i++) {
		range.push(i);
	}
	
	var bucket = d3.scale.quantize().domain([0, calcs.max > 0 ? calcs.max : 1]).range(range),
		side = d3.select('#tiles').attr('class');
	
	
	if (side === 'front') {
		side = 'back';
	} else {
		side = 'front';
	}
	
	for (var d = 0; d < data[state].views.length; d++) {
		for (var h = 0; h < data[state].views[d].length; h++) {

			var sel = '#d' + d + 'h' + h + ' .tile .' + side,
				val = data[state].views[d][h].fall + data[state].views[d][h].spring;
			
			if (view !== 'all') {
				val = data[state].views[d][h][view];
			}
			
			// erase all previous bucket designations on this cell
			for (var i = 1; i <= buckets; i++) {
				var cls = 'q' + i + '-' + buckets;
				d3.select(sel).classed(cls , false);
			}
			
			// set new bucket designation for this cell
			var cls = 'q' + (val > 0 ? bucket(val) : 0) + '-' + buckets;
			d3.select(sel).classed(cls, true);
		}
	}
	flipTiles();
	if (isOldBrowser() === false) {
		drawHourlyChart(state, 3);
	}
}

/* ************************** */

function flipTiles() {

	var oldSide = d3.select('#tiles').attr('class'),
		newSide = '';
	
	if (oldSide == 'front') {
		newSide = 'back';
	} else {
		newSide = 'front';
	}
	
	var flipper = function(h, d, side) {
		return function() {
			var sel = '#d' + d + 'h' + h + ' .tile',
				rotateY = 'rotateY(180deg)';
			
			if (side === 'back') {
				rotateY = 'rotateY(0deg)';	
			}
			if (browser.browser === 'Safari' || browser.browser === 'Chrome') {
				d3.select(sel).style('-webkit-transform', rotateY);
			} else {
				d3.select(sel).select('.' + oldSide).classed('hidden', true);
				d3.select(sel).select('.' + newSide).classed('hidden', false);
			}
				
		};
	};
	
	for (var h = 0; h < hours.length; h++) {
		for (var d = 0; d < days.length; d++) {
			var side = d3.select('#tiles').attr('class');
			setTimeout(flipper(h, d, side), (h * 20) + (d * 20) + (Math.random() * 100));
		}
	}
	d3.select('#tiles').attr('class', newSide);
}

/* ************************** */

function drawHourlyChart(state, day) {
	
	d3.selectAll('#hourly_values svg').remove();
	
	var w = 300,
		h = 150;
	
	var weeklyData = data[state].views[day],
		view = d3.select('#type label.sel span').attr('class');
		
		
	var y = d3.scale.linear()
		.domain([0, d3.max(weeklyData, function(d) { return (view === 'all') ? d.fall + d.spring : d[view] })])
		.range([0, h]);

	
	var chart = d3.select('#hourly_values .svg')
		.append('svg:svg')
		.attr('class', 'chart')
		.attr('width', 300)
		.attr('height', 170);
		
	var rect = chart.selectAll('rect'),
		text = chart.selectAll('text');
	
	rect.data(weeklyData)
		.enter()
			.append('svg:rect')
				.attr('x', function(d, i) { return i * 12; })
				.attr('y', function(d) { return (view === 'all') ? h - y(d.fall + d.spring) : h - y(d[view]) })
				.attr('height', function(d) { return (view === 'all') ? y(d.fall + d.spring) : y(d[view]) })
				.attr('width', 10)
				.attr('class', function(d, i) { return 'hr' + i});
	
	text.data(hours)
		.enter()
			.append('svg:text')
				.attr('class', function(d, i) { return (i % 3) ? 'hidden hr' + i : 'visible hr' + i })
				.attr("x", function(d, i) { return i * 12 })
				.attr("y", 166)
				.attr("text-anchor", 'left')
				.text(String);
}

/* ************************** */

function drawMobilePie(state) {

	var w = 150,
		h = 150,
		r = Math.min(w, h) / 2,
		pieData = [1, data[state].pc2mob],
		pie = d3.layout.pie(),
		arc = d3.svg.arc().innerRadius(0).outerRadius(r),
		type = selectedType();
	
	d3.select('#pc2mob').attr('class', type);
	d3.selectAll('#pc2mob svg').remove();
	
	var chart = d3.select("#pc2mob .svg").append('svg:svg')
		.data([pieData])
		.attr("width", w)
		.attr("height", h);
	
	var arcs = chart.selectAll('g')
		.data(pie)
		.enter().append('svg:g')
			.attr("transform", "translate(" + r + "," + r + ")");
	
	arcs.append('svg:path')
		.attr('d', arc)
		.attr('class', function(d, i) { return i === 0 ? 'mob' : 'pc' });
	
	var rawMobPercent = 100 / (data[state].pc2mob + 1);
	
	if (rawMobPercent < 1) {
		var mobPercent = '< 1',
			pcPercent = '> 99';
	} else {
		var mobPercent = Math.round(rawMobPercent),
			pcPercent = 100 - mobPercent;
	}
	
	d3.select('#pc2mob .pc span').html(pcPercent + '%');
	d3.select('#pc2mob .mob span').html(mobPercent + '%');
	
	var html = d3.select('#pc2mob ul').html();
	d3.select('#ie8_percents').html(html);
}

/* ************************** */

function updateIE8percents(state) {

	var rawMobPercent = 100 / (data[state].pc2mob + 1);
	
	if (rawMobPercent < 1) {
		var mobPercent = '< 1',
			pcPercent = '> 99';
	} else {
		var mobPercent = Math.round(rawMobPercent),
			pcPercent = 100 - mobPercent;
	}
	
	d3.select('#pc2mob .pc span').html(pcPercent + '%');
	d3.select('#pc2mob .mob span').html(mobPercent + '%');
	
	var html = d3.select('#pc2mob ul').html();
	d3.select('#ie8_percents').html(html);
}




/* ************************** */

function createTiles() {

	var html = '<table id="tiles" class="front">';

	html += '<tr><th><div>&nbsp;</div></th>';

	for (var h = 0; h < hours.length; h++) {
		html += '<th class="h' + h + '">' + hours[h] + '</th>';
	}
	
	html += '</tr>';

	for (var d = 0; d < days.length; d++) {
		html += '<tr class="d' + d + '">';
		html += '<th>' + days[d].abbr + '</th>';
		for (var h = 0; h < hours.length; h++) {
			html += '<td id="d' + d + 'h' + h + '" class="d' + d + ' h' + h + '"><div class="tile"><div class="face front"></div><div class="face back"></div></div></td>';
		}
		html += '</tr>';
	}
	
	html += '</table>';
	d3.select('#vis').html(html);
}

/* ************************** */

function selectHourlyChartBar(hour) {

	d3.selectAll('#hourly_values .chart rect').classed('sel', false);
	d3.selectAll('#hourly_values .chart rect.hr' + hour).classed('sel', true);
	
	d3.selectAll('#hourly_values .chart text').classed('hidden', true);
	d3.selectAll('#hourly_values .chart text.hr' + hour).classed('hidden', false);

};

/* ************************** */

function createMap() {
	var svg = d3.select("#map").append('svg:svg')
		.attr('width', 320)
		.attr('height', 202);
	
	var g = svg.append('svg:g')
		.attr('transform', 'scale(0.5) translate(-27, -134)');
	
	for (s = 0; s < mapSVG.states.length; s++ ) {
		var state = mapSVG.states[s];
		
		var path = g.append('svg:path')
			.attr('id', state)
			.attr('class', 'state')
			.attr('d', mapSVG[state]);
	}	
}