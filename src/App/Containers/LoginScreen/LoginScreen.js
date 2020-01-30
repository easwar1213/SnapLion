import React, { createRef } from 'react'
import { View, Text, Image, Button, TextInput } from 'react-native'
import styles from './LoginScreenStyle'
import { Colors, Images } from 'App/Theme'
import CountryPicker from 'react-native-country-picker-modal';
import { TextInputMask } from 'react-native-masked-text'
import { getCountryMask } from '../../Components/CountryMask/CountryMask';
import CodeInput from 'react-native-confirmation-code-field';

import firebase from 'react-native-firebase';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cca2: 'US',
            code: '1',
            callingCode: '1',
            mask: '999-999-9999',
            invalidNumber: false,
            maxLength: 12,
            phoneNum: '',
            phoneNumLineColor: Colors.grey,
            error: null
        };
    }
    _setCountryPhone = (item) => {
        const countryMask = getCountryMask(item.cca2);
        const maxlen = countryMask.length;
        this.setState({
            cca2: item.cca2,
            code: item.callingCode[0],
            mask: countryMask,
            maxLength: maxlen
        })
    };

    checkMobileNumber(e) {
        if (this.state.phoneNum == "" || this.state.phoneNum == null) {
            this.setState({ error: 'Pease enter a valid phone number' });
        }
        else {
            this.setState({ error: null });
        }
    }

    handleSubmit() {
        if (this.state.phoneNum != "") {
            this.setState({
                error: null,
                phoneNumLineColor: Colors.grey
            });
            return true;
        }
        else {
            this.setState({
                error: 'Please enter a valid phone number!',
                phoneNumLineColor: Colors.red
            });
            return false;
        }
    }

    signIn = () => {
        var retVal = this.handleSubmit();
        if (retVal) {
            const { phoneNum, code } = this.state;
            const mobNum = '+' + code + phoneNum;
            console.log("Mob", mobNum);
            this.setState({ message: 'Sending code ...' });

            firebase.auth().signInWithPhoneNumber(mobNum)
                .then(confirmResult => { console.log("AA", confirmResult),this.setState({ confirmResult, message: 'Code has been sent!' }) })
                .catch(error => { console.log("Err", error.message), this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }) });
        }
    };

    handlerOnFulfill = code => {
        console.log("codeee", code);
        this.state.confirmResult.confirm(code)
            .then(user => { console.log("userid", user) })
            .catch (error => { console.log("Err", error) });
            // if (isValidCode(code)) {
            //   console.log(code);
            // } else {
            //   this.clearCode();
            // }
        };

        field = createRef();

        clearCode() {
            const { current } = this.field;

            if (current) {
                current.clear();
            }
        }

        pasteCode() {
            const { current } = this.field;

            if (current) {
                current.handlerOnTextChange(value);
            }
        }

        render() {
            return (
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image source={Images.appIcon} style={styles.appIcon}></Image>
                        <View style={styles.welcomeTextView}>
                            <Text style={styles.welcomeText}>Welcome!</Text>
                            <Text style={styles.appNameText}>  to Cafe Easy</Text>
                        </View>
                    </View>
                    <View style={styles.phoneNumLoginView}>
                        <Text style={{ fontSize: 15 }}>Please Enter Your Phone Number</Text>
                        <View style={styles.countryPickerView}>
                            <View style={styles.countryPickerView}>
                                <CountryPicker
                                    onSelect={(e) => { this._setCountryPhone(e) }}
                                    countryCode={this.state.cca2}
                                    withFilter={true}
                                />
                                <Text style={{ paddingTop: 3 }}>+{this.state.code}</Text>
                            </View>
                            <View style={styles.textInputMaskView}>
                                <TextInputMask
                                    type={'custom'}
                                    options={{
                                        mask: this.state.mask
                                    }}
                                    maxLength={this.state.maxLength}
                                    keyboardType="numeric"
                                    returnKeyType="done"
                                    allowFontScaling={false}
                                    placeholder='Phone Number'
                                    value={this.state.phoneNum}
                                    style={{ borderBottomColor: this.state.phoneNumLineColor, borderBottomWidth: 0.6, height: 40 }}
                                    onChangeText={(phoneNum) => {
                                        this.setState({
                                            phoneNum: phoneNum
                                        })
                                    }}
                                />
                                {this.state.error && <Text style={{ color: Colors.red, paddingTop: 5 }}>{this.state.error}</Text>}
                            </View>
                        </View>
                        <View style={{ paddingTop: 15 }}>
                            <Button
                                title="CONTINUE"
                                color={Colors.red}
                                onPress={() => { this.signIn() }}
                            />
                        </View>
                        <View style={{ backgroundColor: 'grey', margin: 5 }}>
                            <CodeInput ref={this.field} codeLength={6} onFulfill={this.handlerOnFulfill} />
                        </View>
                    </View>
                    <View style={styles.socialLoginView}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ height: 1, backgroundColor: Colors.grey, width: 30 }}></View>
                            <Text style={{ fontSize: 15, paddingLeft: 10, paddingRight: 10, color: Colors.grey }}>OR CONTINUE WITH</Text>
                            <View style={{ height: 1, backgroundColor: 'grey', width: 30 }}></View>
                        </View>
                        <View style={styles.socialIconView}>
                            <Image source={Images.googleIcon} style={styles.socialIcon}></Image>
                            <Image source={Images.facebookIcon} style={styles.socialIcon}></Image>
                            <Image source={Images.twitterIcon} style={styles.socialIcon}></Image>
                        </View>
                    </View>
                </View>
            )
        }
    }