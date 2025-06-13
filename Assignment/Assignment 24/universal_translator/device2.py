from googletrans import Translator

# vietnam to English

def device2_translate():
    # read file from device1
    with open("device1_to_device2.txt", "r", encoding="utf-8") as f:
        received_text = f.read()
    print(f"Device2 recieved (Vietnamese): {received_text}")

    # translate to English (reponse)
    translator = Translator()
    translated = translator.translate(received_text, src="vi", dest="en").text
    print(f"Translate to English (reponse): {translated}")

    # write the file
    with open("device2_response.txt", "w", encoding="utf-8") as f:
        f.write(translated)

device2_translate()