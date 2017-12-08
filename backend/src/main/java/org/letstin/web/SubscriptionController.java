package org.letstin.web;

import nl.martijndwars.webpush.Notification;
import nl.martijndwars.webpush.PushService;
import nl.martijndwars.webpush.Subscription;
import nl.martijndwars.webpush.Utils;
import org.apache.http.HttpResponse;
import org.jose4j.lang.JoseException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.security.Security;
import java.util.concurrent.ExecutionException;

@RestController
public class SubscriptionController {

    /**
     * look at https://github.com/web-push-libs/webpush-java how to generate public/private key for the application
     *
     */

    private static final String PUBLIC_KEY = "BD_JFMkDTSkCHOaG9eppktmhcr-gdVw7fV-F4HPyQwTQ_p1_qJ5YhrcD95Upd1L1uWZJbPNQAdVefOhcc88YQPw=";
    private static final String PRIVATE_KEY = "AMsUXP8oGQO13pKhpFGyGFV3buAphstWc7lxGsgLOkoH";

    /**
     * Make a once only subscription and immediately send a notification to client
     */
    @PostMapping(path = "/subscribe", consumes = "application/json")
    public void subscribe(@RequestBody Subscription subscription) throws InterruptedException, GeneralSecurityException, JoseException, ExecutionException, IOException {
        Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());

        PushService pushService = new PushService();
        pushService.setPublicKey(Utils.loadPublicKey(PUBLIC_KEY));
        pushService.setPrivateKey(Utils.loadPrivateKey(PRIVATE_KEY));

        Notification notification = new Notification(subscription, "Test");

        HttpResponse send = pushService.send(notification);
        System.out.println(send);
    }
}