import {Pressable, Text, StyleSheet} from "react-native"

export const BUTTON_PRIMARY = "primary"
export const BUTTON_SECONDARY = "secondary"
export const BUTTON_DANGER = "danger"
export const BUTTON_SUCCESS = "success"

export function Button({type = BUTTON_PRIMARY, text, onClick}){

    const buttonStyles = {
        [BUTTON_PRIMARY]: styles.buttonPrimary,
        [BUTTON_SECONDARY]: styles.buttonSecondary,
        [BUTTON_DANGER]: styles.buttonDanger,
        [BUTTON_SUCCESS]: styles.buttonSuccess
    }

    return (
        <Pressable style={buttonStyles[type]} onPress={onClick}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  buttonPrimary:{
    backgroundColor: "#1c6fd4",
    padding: 8,
    borderRadius: 8,
    width: "100%"
  },
  buttonSecondary:{
    backgroundColor: "#979797",
    padding: 8,
    borderRadius: 8,
    width: "100%"
  },
  buttonDanger:{
    backgroundColor: "#b43f3f",
    padding: 8,
    borderRadius: 8,
    width: "100%"
  },
   buttonSuccess:{
    backgroundColor: "#37ad65",
    padding: 8,
    borderRadius: 8,
    width: "100%"
  },
  buttonText:{
    color: "#fff",
    fontSize: 24,
    textAlign: "center"
  }
})