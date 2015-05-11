package ostc.sh.webconsole.util;

import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.charset.Charset;
import java.nio.charset.CharsetDecoder;
import java.nio.charset.CoderResult;
import java.nio.charset.CodingErrorAction;

/**
 * 
 * @author andliu
 *
 */
public class CharacterUtil {
	// TODO optimize this.
	// you need to use the *2 method to new the buffer.
	CharsetDecoder decoder;

	public CharacterUtil(String encodingName) {
		Charset charset = Charset.forName(encodingName);

		decoder = charset.newDecoder();
		decoder.onMalformedInput(CodingErrorAction.REPLACE);
		decoder.onUnmappableCharacter(CodingErrorAction.REPLACE);
	}

	public String convertFrom(byte[] c, int off, int len) {

		ByteBuffer decode_in = ByteBuffer.allocate(len*2);
		CharBuffer decode_out = CharBuffer.allocate(len*2);

		String result = null;
		CoderResult status;

		decode_in.put(c, off, len);
		decode_in.flip();
		do {
			decode_out.clear();
			status = decoder.decode(decode_in, decode_out, false);
			decode_out.flip();
			if (result == null) {
				result = decode_out.toString();
			} else {
				result += decode_out.toString();
			}
		} while (status == CoderResult.OVERFLOW);
		decode_in.compact();

		return result;
	}

}
