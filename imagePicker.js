import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class imagePicker extends Component {
    choosePhoto = () =>{
        const options ={
            noData:true
        };
        ImagePicker.launchImageLibrary(options,response=>{
            console.log(response);
        });
    }
    render() {
        return (
            <>
                <Button
                    title='Choose Photo'
                    onPress={this.choosePhoto}
                />
            </>
        );
    }
}
