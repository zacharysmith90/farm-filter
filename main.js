// wait for dom ready
document.addEventListener("DOMContentLoaded", function (e) {
	/**
	 * Capture all filters into a NodeList
	 */
	const filter_dropdowns = document.querySelectorAll("select.filter");

	/**
	 * Listen to each filter dropdown for a change and fire the filter function
	 */
	filter_dropdowns.forEach(function (filter_dropdown) {
		filter_dropdown.addEventListener("change", function (e) {
			/**
			 * on change, run the filter_movies function
			 * which will re-evaluate all three dropdown selections and generate
			 * a fresh selector for the filters
			 */
			filter_snap();
		});
	});
});

/**
 * This function grabs the value of each dropdown and builds
 * a combined class to show/hide
 */
function filter_snap() {
	/**
	 * Capture the value of each dropdown
	 */
	const borough_class = document.querySelector("#borough").value;
	const month_class = document.querySelector("#month").value;
	const snap_class = document.querySelector("#snap").value;

	/**
	 * Remove .active from each active item
	 */
	const active_items = document.querySelectorAll(".item.active");

	active_items.forEach(function (item) {
		item.classList.remove("active");
	});

	/**
	 * Show items that match the dropdowns
	 */
	let selector = ".item";
	if (borough_class !== "") {
		selector = `${selector}.${borough_class}`;
	}
	if (month_class !== "") {
		selector = `${selector}.${month_class}`;
	}
	if (snap_class !== "") {
		selector = `${selector}.${snap_class}`;
	}

	const filtered_items = document.querySelectorAll(selector);

	filtered_items.forEach(function (item) {
		item.classList.add("active");
	});
}