from googletrans import Translator

# English to vietnam

def device1_translate():
    # read input from user
    with open("device1_input.txt", "r", encoding="utf-8") as f:
        text = f.read()
    print(f"Device 1 talk (English): {text}")

    # Dịch sang tiếng Việt
    translator = Translator()
    translated = translator.translate(text, src="en", dest="vi").text
    print(f"➡️ Translated to Vietnamese: {translated}")

    # write and send to device2
    with open("device1_to_device2.txt", "w", encoding="utf-8") as f:
        f.write(translated)

device1_translate()
