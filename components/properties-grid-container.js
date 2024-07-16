import PropertyCard from "./property-card";
import PropTypes from "prop-types";

const PropertiesGridContainer = ({ allProperties }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-center `}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[12px] px-2.5">
        {allProperties.map((property, id) => (
          <PropertyCard
            imgUrl={property.image}
            key={property.id}
            name={property.name}
            price={property.price}
          />
        ))}
      </div>
    </div>
  );
};

PropertiesGridContainer.propTypes = {
  className: PropTypes.string,
};

export default PropertiesGridContainer;
