import React, {useEffect} from 'react';
import {StyleSheet, SectionList, SafeAreaView, Text, View, ActivityIndicator} from 'react-native';
import HeaderButton from "../components/UI/HeaderButton";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {headerTitleStyle, headerStyle} from '../constants/HeaderStyle';
import Colors from '../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import * as actionTypes from '../store/actions/events';
import Event from '../components/Event';
import {getLongDate} from "../utility";
import DefaultText from "../components/UI/DefaultText";

const FestivalCalendarScreen = (props) => {
	const events = useSelector(state => state.calendar.events);
	const loading = useSelector(state => state.calendar.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actionTypes.loadEvents());
	}, [dispatch]);

	const groups = events.reduce((groups, event) => {
		const date = event.date.split('T')[0];
		if (!groups[date]) {
			groups[date] = [];
		}
		groups[date].push(event);
		return groups;
	}, {});

	const groupArrays = Object.keys(groups).map((date) => {
		return {
			title: getLongDate(date),
			data: groups[date]
		};
	});

	const onPressedEvent = (id, title, type) => {
		switch(type) {
			case 'BLOCK':
				props.navigation.navigate({
					routeName: 'BlockScreen', params: {
						id,
						title,
						event: true,
						type
					}
				});
				break;
			case 'FILM':
			default:
				props.navigation.navigate({
					routeName: 'EventScreen', params: {
						id,
						title,
						event: true,
						type
					}
				});
		}
	};

	const activityIndicator =  <View style={[styles.activityIndicatorContainer, styles.horizontal]}>
		<ActivityIndicator size="large" color={Colors.secondary} />
	</View>;

	return (
		<SafeAreaView style={styles.container}>
			{loading? activityIndicator : <SectionList
				sections={groupArrays}
				keyExtractor={(item, index) => item.id + index}
				renderItem={({item}) => <Event {...item} pressed={(type) => onPressedEvent(item.id, item.title, type)}/>}
				renderSectionHeader={({section: {title}}) => (
					<View style={styles.header}>
						<View style={styles.headerLeft}>
							<DefaultText style={styles.text}>{title.split(',').shift()}</DefaultText>
						</View>

						<View style={styles.headerRight}>
							<DefaultText style={styles.text}>{title.split(',').pop()}</DefaultText>
						</View>
					</View>
				)}
			/> }
		</SafeAreaView>
	);
};

FestivalCalendarScreen.navigationOptions = (props) => {
	return {
		headerTitle: 'FESTIVAL SCHEDULE',
		headerTintColor: Colors.white,
		headerTitleStyle,
		headerStyle,
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item title="Menu" iconName="ios-menu" onPress={() => {
					props.navigation.toggleDrawer();
				}}/>
			</HeaderButtons>
		),
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Filter"
					iconName="ios-options" onPress={() => {
					props.navigation.navigate('CalendarFilter')
				}}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	activityIndicatorContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10
	},
	header: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: Colors.secondary,
		paddingTop: 4,
		paddingBottom: 4
	},
	headerTextLeft: {
		flexDirection: "row",
		fontSize: 24,
		color: Colors.white
	},
	headerRight: {
		flexDirection: "row",
		fontSize: 24,
		color: Colors.white,
		width: "80%",
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		paddingLeft: 18
	},
	headerLeft: {
		flexDirection: "row",
		fontSize: 24,
		color: Colors.white,
		width: "20%",
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		color: Colors.white
	}
});

export default FestivalCalendarScreen;
