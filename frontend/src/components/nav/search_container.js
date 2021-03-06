import { connect } from 'react-redux'
import { 
    fetchDogsByDogname, 
    fetchDogsByLocation, 
    fetchDogsByBreed 
} from '../../actions/dog_actions'

import Search from './search'

// const mapStateToProps = state => {

// };

const mapDispatchToProps = dispatch => {
    return {
        searchByDogname: (dogname) => dispatch(fetchDogsByDogname(dogname)),
        searchByLocation: (location) => dispatch(fetchDogsByLocation(location)),
        searchByBreed: (breed) => dispatch(fetchDogsByBreed(breed))
    };
};

export default connect(null, mapDispatchToProps)(Search);
