const filterLevelValueMin = document.getElementById("min-level");
const filterLevelValueMax = document.getElementById("max-level");
const filterLevelValueMinSlider = document.getElementById("tail-1");
const filterLevelValueMaxSlider = document.getElementById("tail-2");
const slider = document.querySelector(".slider");

const state = {
    defaultMinLevel: 30,
    defaultMaxLevel: 100
};

export const initLevelValues = () => { 
    filterLevelValueMin.value = state.defaultMinLevel;
    filterLevelValueMax.value = state.defaultMaxLevel;
    filterLevelValueMaxSlider.value = state.defaultMaxLevel;
    slider.style.setProperty("--value-1", state.defaultMinLevel);
    filterLevelValueMinSlider.value = state.defaultMinLevel;
    slider.style.setProperty("--value-2", state.defaultMaxLevel);
};

const handleInputMin = (evt) => {
    if (evt.target.value >= 0 && evt.target.value <= 100) {
        slider.style.setProperty("--value-1", evt.target.value);
        filterLevelValueMinSlider.value = evt.target.value;
    }
};

const handleInputMax = (evt) => {
    if (evt.target.value >= 0 && evt.target.value <= 100) {
        slider.style.setProperty("--value-2", evt.target.value);
        filterLevelValueMaxSlider.value = evt.target.value;
    }
};

const handleSliderInputMin = (evt) => {
    const maxValue = slider.style.getPropertyValue("--value-2");
    if (parseInt(evt.target.value) >= parseInt(maxValue)) {
        evt.target.value = maxValue;
    }

    if (evt.target.value === "100") {
        evt.target.style.zIndex = "100";
    } else {
        evt.target.style.zIndex = "0";
    }

    slider.style.setProperty("--value-1", evt.target.value);
    filterLevelValueMin.value = evt.target.value;
};

const handleSliderInputMax = (evt) => {
    const minValue = slider.style.getPropertyValue("--value-1");

    if (parseInt(evt.target.value) <= parseInt(minValue)) {
        evt.target.value = minValue;
    }

    if (evt.target.value === "0") {
        evt.target.style.zIndex = "100";
    } else {
        evt.target.style.zIndex = "0";
    }

    slider.style.setProperty("--value-2", evt.target.value);
    filterLevelValueMax.value = evt.target.value
};

filterLevelValueMin.addEventListener("input", handleInputMin);
filterLevelValueMax.addEventListener("input", handleInputMax);
filterLevelValueMinSlider.addEventListener("input", handleSliderInputMin);
filterLevelValueMaxSlider.addEventListener("input", handleSliderInputMax);