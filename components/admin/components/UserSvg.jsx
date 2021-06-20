import React from "react";

function UserSvg({
  caret,
  profile,
  logout,
  settings,
  isOptions,
  onClick,
  search,
  largeSearch,
}) {
  const hw = { width: 15, height: 15, strokeWidth: 1 };
  return caret ? (
    <>
      <svg
        id="i-caret-right"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        onClick={onClick}
        style={{
          enableBackground: "new 0 0 53 53",
          width: 10,
          height: 10,
          strokeWidth: 1,
          stroke: "black",
          strokeLinecap: "round",
          fill: "white",
          strokeLinejoin: "round",
          transform: isOptions && "rotateZ(270deg)",
        }}
      >
        <path d="M10 30 L26 16 10 2 Z" />
      </svg>
    </>
  ) : profile ? (
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 50 50"
        style={{ enableBackground: "new 0 0 50 50", ...hw }}
        xmlSpace="preserve"
      >
        <g id="Layer_1">
          <path
            d="M35,6c0-2.757-2.243-5-5-5H20c-2.757,0-5,2.243-5,5v3H1v17h2v23h44V26h2V9H35V6z M17,6c0-1.654,1.346-3,3-3h10
     c1.654,0,3,1.346,3,3v3H17V6z M5,42.09c2.507,0.423,4.486,2.403,4.91,4.91H5V42.09z M40.09,47c0.423-2.507,2.403-4.486,4.91-4.91
     V47H40.09z M45,40.069c-3.612,0.453-6.477,3.319-6.931,6.931H11.931C11.477,43.388,8.612,40.523,5,40.069V26h14v6h5v2h2v-2h5v-6h14
     V40.069z M24,28v2h-3v-4h8v4h-3v-2H24z M47,24H31H19H3V11h44V24z"
          />
        </g>
        <g></g>
      </svg>
    </>
  ) : settings ? (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={hw}
      x="0px"
      y="0px"
      viewBox="0 0 197.176 196.278"
      enableBackground="new 0 0 197.176 196.278"
      xmlSpace="preserve"
    >
      <path
        d="M90.456,196.278c-0.061,0-0.123-0.002-0.186-0.008l-27.251-2.516c-1.011-0.093-1.791-0.93-1.815-1.944
 l-0.441-18.821c-5.281-2.524-10.029-5.881-14.144-10.002l-17.874,5.832c-0.963,0.316-2.013-0.143-2.437-1.065l-11.436-24.856
 c-0.424-0.922-0.09-2.017,0.777-2.544l16.061-9.781c-0.442-5.818,0.098-11.604,1.61-17.236l-14.005-12.58
 c-0.755-0.679-0.882-1.816-0.295-2.645l15.819-22.33c0.587-0.827,1.701-1.085,2.591-0.598l16.505,9.019
 c2.399-1.635,4.938-3.07,7.56-4.277c2.622-1.206,5.365-2.198,8.167-2.958l3.89-18.402c0.209-0.993,1.115-1.674,2.142-1.578
 l27.25,2.517c1.011,0.093,1.792,0.93,1.815,1.944l0.44,18.822c5.292,2.535,10.04,5.892,14.144,10l17.875-5.831
 c0.963-0.32,2.013,0.143,2.438,1.065l11.43,24.846c0.424,0.922,0.09,2.015-0.776,2.544l-16.059,9.779
 c0.449,5.788-0.091,11.578-1.608,17.247l14.005,12.581c0.756,0.679,0.883,1.816,0.296,2.645l-15.821,22.33
 c-0.586,0.828-1.699,1.088-2.59,0.598l-16.505-9.019c-2.401,1.635-4.939,3.07-7.561,4.276c-2.623,1.206-5.364,2.199-8.166,2.959
 l-3.89,18.402C92.214,195.624,91.393,196.278,90.456,196.278 M65.161,189.935l23.704,2.188l3.779-17.873
 c0.157-0.751,0.733-1.346,1.479-1.528c2.98-0.731,5.897-1.748,8.671-3.025c2.771-1.274,5.442-2.828,7.938-4.617
 c0.625-0.447,1.451-0.497,2.124-0.129l16.029,8.761l13.763-19.424l-13.605-12.221c-0.573-0.515-0.799-1.313-0.582-2.052
 c1.751-5.968,2.321-12.091,1.695-18.197c-0.078-0.768,0.291-1.511,0.95-1.913l15.601-9.501l-9.941-21.609l-17.365,5.664
 c-0.735,0.239-1.538,0.036-2.069-0.523c-4.23-4.449-9.251-7.999-14.923-10.551c-0.702-0.317-1.16-1.008-1.178-1.777l-0.429-18.284
 l-23.705-2.189L73.32,79.009c-0.159,0.751-0.734,1.346-1.48,1.528c-2.981,0.731-5.899,1.748-8.672,3.024
 c-2.771,1.275-5.442,2.828-7.937,4.617c-0.625,0.448-1.452,0.498-2.125,0.13l-16.03-8.761L23.314,98.972l13.604,12.221
 c0.573,0.515,0.8,1.313,0.582,2.053c-1.745,5.922-2.316,12.042-1.699,18.19c0.077,0.766-0.292,1.507-0.949,1.908l-15.602,9.5
 l9.947,21.62l17.365-5.665c0.733-0.24,1.538-0.034,2.069,0.523c4.243,4.463,9.263,8.013,14.919,10.551
 c0.703,0.317,1.163,1.008,1.182,1.778L65.161,189.935z M83.128,155.721c-9.836,0-19.451-5.035-24.784-13.603
 c-4.826-7.756-5.792-17.08-2.648-25.581c3.144-8.5,9.942-14.951,18.656-17.7c12.403-3.915,26.395,1.261,33.269,12.304
 c4.827,7.756,5.792,17.079,2.648,25.58c-3.144,8.5-9.943,14.952-18.654,17.701C88.833,155.3,85.97,155.721,83.128,155.721
  M61.74,140.005c5.924,9.516,17.979,13.976,28.669,10.603c7.525-2.375,13.396-7.943,16.108-15.275
 c2.711-7.333,1.876-15.38-2.295-22.079c-5.921-9.517-17.978-13.972-28.669-10.603c-7.523,2.375-13.395,7.942-16.106,15.274
 C56.735,125.258,57.571,133.306,61.74,140.005z"
      />
      <path
        d="M151.975,86.696c-0.702,0-1.379-0.371-1.742-1.015l-5.51-9.747c-3.392,0.097-6.735-0.314-9.981-1.249
 l-7.738,8.07c-0.703,0.732-1.844,0.822-2.65,0.209l-13.505-10.236c-0.809-0.613-1.029-1.735-0.514-2.609l5.68-9.633
 c-1.775-2.879-3.082-5.986-3.895-9.267l-10.872-2.67c-0.987-0.242-1.634-1.185-1.508-2.193l2.12-16.815
 c0.127-1.001,0.978-1.75,1.983-1.75h0.02l11.186,0.102c0.803-1.482,1.716-2.904,2.729-4.238c1.013-1.336,2.134-2.6,3.343-3.771
 l-3.121-10.742c-0.283-0.975,0.209-2.006,1.145-2.401l15.617-6.584c0.938-0.394,2.019-0.024,2.519,0.859l5.509,9.747
 c3.398-0.107,6.745,0.315,9.981,1.248l7.737-8.07c0.703-0.733,1.845-0.822,2.651-0.21l13.499,10.233
 c0.809,0.613,1.03,1.735,0.514,2.609l-5.679,9.63c1.772,2.864,3.079,5.974,3.897,9.273l10.873,2.671
 c0.987,0.243,1.636,1.185,1.509,2.193l-2.12,16.815c-0.126,1.001-0.978,1.75-1.984,1.75h-0.018l-11.187-0.102
 c-0.803,1.483-1.718,2.904-2.728,4.237c-1.012,1.334-2.132,2.599-3.344,3.772l3.119,10.743c0.284,0.974-0.208,2.005-1.143,2.4
 l-15.617,6.584C152.497,86.646,152.234,86.696,151.975,86.696 M145.857,71.875c0.717,0,1.384,0.386,1.74,1.016l5.24,9.27l12.335-5.2
 l-2.967-10.214c-0.214-0.737,0.013-1.532,0.585-2.046c1.381-1.239,2.645-2.611,3.754-4.077h0.001c1.111-1.466,2.09-3.053,2.91-4.717
 c0.34-0.687,1.058-1.163,1.813-1.115l10.636,0.097l1.674-13.282l-10.34-2.54c-0.748-0.183-1.324-0.78-1.481-1.534
 c-0.767-3.674-2.205-7.094-4.273-10.164c-0.432-0.64-0.456-1.47-0.064-2.134l5.401-9.16l-10.66-8.08l-7.36,7.675
 c-0.532,0.557-1.339,0.759-2.071,0.514c-3.514-1.162-7.194-1.619-10.94-1.369c-0.757,0.047-1.498-0.34-1.877-1.01l-5.239-9.27
 l-12.336,5.2l2.967,10.214c0.215,0.737-0.013,1.533-0.585,2.046c-1.377,1.236-2.641,2.607-3.754,4.076
 c-1.111,1.467-2.092,3.054-2.911,4.717c-0.337,0.684-1.032,1.116-1.794,1.116h-0.018l-10.636-0.096l-1.674,13.281l10.341,2.54
 c0.748,0.183,1.323,0.781,1.48,1.536c0.756,3.646,2.193,7.065,4.271,10.161c0.429,0.639,0.453,1.467,0.062,2.13l-5.4,9.16
 L125.35,78.7l7.359-7.675c0.533-0.555,1.339-0.756,2.071-0.513c3.529,1.167,7.211,1.628,10.938,1.368
 C145.764,71.877,145.812,71.875,145.857,71.875 M143.689,62.104c-3.193,0-6.395-0.797-9.247-2.443
 c-5.107-2.944-8.493-7.957-9.291-13.752c-0.798-5.796,1.108-11.537,5.229-15.752c5.87-6.005,15.413-7.32,22.688-3.122
 c5.106,2.944,8.492,7.957,9.29,13.752c0.798,5.796-1.108,11.536-5.229,15.751C153.562,60.188,148.636,62.104,143.689,62.104
  M143.802,28.579c-3.888,0-7.757,1.507-10.561,4.375c-3.251,3.324-4.755,7.848-4.127,12.409c0.627,4.562,3.298,8.51,7.326,10.833
 c5.718,3.298,13.215,2.265,17.829-2.455c3.25-3.324,4.754-7.847,4.126-12.408c-0.627-4.562-3.298-8.511-7.325-10.833
 C148.827,29.207,146.312,28.579,143.802,28.579"
      />
    </svg>
  ) : logout ? (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 129 129"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      enableBackground="new 0 0 129 129"
      style={hw}
      className="svgLogout"
    >
      <g>
        <g>
          <path d="m88.6,94.4c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2l27-27c0.2-0.2 0.4-0.4 0.5-0.6 0,0 0.1-0.1 0.1-0.2 0.1-0.2 0.2-0.4 0.3-0.5 0-0.1 0-0.2 0.1-0.2 0.1-0.2 0.1-0.3 0.2-0.5 0.1-0.3 0.1-0.5 0.1-0.8 0-0.3 0-0.5-0.1-0.8 0-0.2-0.1-0.4-0.2-0.5 0-0.1 0-0.2-0.1-0.2-0.1-0.2-0.2-0.4-0.3-0.6 0,0 0-0.1-0.1-0.1-0.1-0.2-0.3-0.4-0.5-0.6l-27-27c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l20,20h-71.1c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h71.1l-20,20c-1.6,1.4-1.6,4 0,5.6z" />
          <path d="m10.5,122.5h54c2.3,0 4.1-1.8 4.1-4.1v-40.3c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1v36.2h-45.8v-99.7h45.8v36.2c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-40.3c0-2.3-1.8-4.1-4.1-4.1h-54c-2.3,0-4.1,1.8-4.1,4.1v107.9c0.1,2.3 1.9,4.1 4.1,4.1z" />
        </g>
      </g>
    </svg>
  ) : search ? (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
    >
      <title>Search</title>
      <path
        className="cls-1"
        d="M69.17463,60.427c-4.13914-2.06356-13.22974-5.11377-13.22974-5.11377V52.31107l.25276-.19251a8.64053,8.64053,0,0,0,3.297-5.51689l.054-.31889h.24668a3.35919,3.35919,0,0,0,3.10446-2.0876,3.67,3.67,0,0,0,.45715-1.76878,3.35224,3.35224,0,0,0-.2406-1.24543A1.71271,1.71271,0,0,0,62.4425,40.098l-.83623-.50532.20453-.91452C63.327,32.0784,58.21312,26.12832,51.34251,25.96587c-.16238-.006-.331-.006-.49336,0-.16238-.006-.33084-.006-.4993,0-6.86466.16245-11.98445,6.11252-10.46843,12.71233l.21075.91452-.84245.50532a1.76425,1.76425,0,0,0-.67385,1.08291,3.3474,3.3474,0,0,0-.23452,1.24543,3.60488,3.60488,0,0,0,.45715,1.76878,3.353,3.353,0,0,0,3.10446,2.0876h.24668l.04809.31889a8.69091,8.69091,0,0,0,3.297,5.51689l.25262.19251v3.00219s-9.0906,3.05022-13.22974,5.11377a4.44355,4.44355,0,0,0-2.38238,3.20665c-.12645.72194-.22858,1.92522-.325,3.42929a27.4317,27.4317,0,0,0,2.26229,2.56894,26.58717,26.58717,0,0,0,37.54745,0A27.40965,27.40965,0,0,0,71.88205,67.063c-.09632-1.50407-.19845-2.70735-.3249-3.42929A4.41332,4.41332,0,0,0,69.17463,60.427Z"
      />
      <path
        className="cls-2"
        d="M122.49884,107.8052,97.65976,80.94684,93.6881,84.92232l-4.49884-4.49877c.34513-.44647.68969-.89316,1.01671-1.34876A48.35524,48.35524,0,1,0,78.348,90.72947q1.02817-.70928,2.021-1.478L84.86058,93.743l-4.4598,4.45973,27.40434,24.31848a10.39793,10.39793,0,1,0,14.69371-14.71606ZM74.56458,74.57455a33.57526,33.57526,0,1,1,9.80887-23.71613A33.57849,33.57849,0,0,1,74.56458,74.57455Z"
      />
    </svg>
  ) : largeSearch ? (
    <svg
      xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 184 161"
      style={{ height: 30, width: 30 }}
    >
      <g id="imagebot_2" label="Layer 1">
        <g
          id="imagebot_3"
          label="Layer 1"
          transform="translate(174.67 152.52) matrix(.90792 0 0 .90792 -427.96 -463.36)"
        >
          <g
            id="imagebot_4"
            stroke="#808080"
            stroke-linecap="round"
            fill="none"
          >
            <path
              id="imagebot_6"
              stroke-linejoin="round"
              stroke-width="10.63"
              stroke="#fff"
              d="m443.16 414.45c0 36.1-29.27 65.36-65.36 65.36-36.1 0-65.36-29.26-65.36-65.36s29.26-65.36 65.36-65.36c36.09 0 65.36 29.26 65.36 65.36z"
            />
            <path
              id="imagebot_5"
              stroke-width="21.26"
              stroke="#fff"
              d="m428.3 464.45l42.43 38.39"
            />
          </g>
        </g>
      </g>
    </svg>
  ) : (
    <>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 53 53"
        style={{
          enableBackground: "new 0 0 53 53",
          width: 30,
          height: 30,
        }}
        xmlSpace="preserve"
      >
        <path
          style={{ fill: "#E7ECED" }}
          d="M18.613,41.552l-7.907,4.313c-0.464,0.253-0.881,0.564-1.269,0.903C14.047,50.655,19.998,53,26.5,53
	c6.454,0,12.367-2.31,16.964-6.144c-0.424-0.358-0.884-0.68-1.394-0.934l-8.467-4.233c-1.094-0.547-1.785-1.665-1.785-2.888v-3.322
	c0.238-0.271,0.51-0.619,0.801-1.03c1.154-1.63,2.027-3.423,2.632-5.304c1.086-0.335,1.886-1.338,1.886-2.53v-3.546
	c0-0.78-0.347-1.477-0.886-1.965v-5.126c0,0,1.053-7.977-9.75-7.977s-9.75,7.977-9.75,7.977v5.126
	c-0.54,0.488-0.886,1.185-0.886,1.965v3.546c0,0.934,0.491,1.756,1.226,2.231c0.886,3.857,3.206,6.633,3.206,6.633v3.24
	C20.296,39.899,19.65,40.986,18.613,41.552z"
        />
        <g>
          <path
            style={{ fill: "#556080" }}
            d="M26.953,0.004C12.32-0.246,0.254,11.414,0.004,26.047C-0.138,34.344,3.56,41.801,9.448,46.76
		c0.385-0.336,0.798-0.644,1.257-0.894l7.907-4.313c1.037-0.566,1.683-1.653,1.683-2.835v-3.24c0,0-2.321-2.776-3.206-6.633
		c-0.734-0.475-1.226-1.296-1.226-2.231v-3.546c0-0.78,0.347-1.477,0.886-1.965v-5.126c0,0-1.053-7.977,9.75-7.977
		s9.75,7.977,9.75,7.977v5.126c0.54,0.488,0.886,1.185,0.886,1.965v3.546c0,1.192-0.8,2.195-1.886,2.53
		c-0.605,1.881-1.478,3.674-2.632,5.304c-0.291,0.411-0.563,0.759-0.801,1.03V38.8c0,1.223,0.691,2.342,1.785,2.888l8.467,4.233
		c0.508,0.254,0.967,0.575,1.39,0.932c5.71-4.762,9.399-11.882,9.536-19.9C53.246,12.32,41.587,0.254,26.953,0.004z"
          />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </>
  );
}

export default UserSvg;