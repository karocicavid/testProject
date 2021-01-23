import React, { Component } from 'react';
import { Button, View, Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            isDatePickerVisible: false,
            myData: null,
            showView: false,
        };
        this.hideDate = this.hideDate.bind(this);
        this.showDate = this.showDate.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }
    showDate () {
        this.setState({isDatePickerVisible: true});
    }
    hideDate () {
        this.setState({isDatePickerVisible: false});
    }
    handleConfirm (datetime) {
        const formatedData = format(datetime, 'MMMM do, yyyy H:mma');

        this.setState({myData: formatedData});
        this.hideDate();
    }
    render() {
        return(
            <View>
                <Button title="Show Date Picker" onPress={this.showDate} />
                <DateTimePickerModal
                    isVisible={this.state.isDatePickerVisible}
                    mode={'datetime'}
                    onConfirm={this.handleConfirm}
                    onCancel={this.hideDate}
                />
                {this.state.myData && <><Text>{this.state.myData}</Text></>}
            </View>
        );
    }

}

export default Calendar;