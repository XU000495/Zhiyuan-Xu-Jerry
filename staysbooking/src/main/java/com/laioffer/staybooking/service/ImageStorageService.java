package com.laioffer.staybooking.service;

import com.google.cloud.storage.Acl;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.laioffer.staybooking.exception.GCSUploadException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.UUID;

@Service
public class ImageStorageService {

    @Value("${gcs.bucket}")
    private String bucketName;

    private final Storage storage;

    public ImageStorageService(Storage storage) {
        this.storage = storage;
    }

//    public final String bucketName;
//    public final Storage storage;
//
//    public ImageStorageService{
//                @Value("${gcs.bucket}")
//                String bucketName;
//                Storage storage) {
//        this.bucketName = bucketName;
//        this.storage = storage;
//    }
//    Advantage: we need immutable data;

    public String save(MultipartFile file) throws GCSUploadException {
        String filename = UUID.randomUUID().toString();
        BlobInfo blobInfo = null;
        try {
            blobInfo = storage.createFrom(
                    BlobInfo
                            .newBuilder(bucketName, filename)
                            .setContentType("image/jpeg")
                            .setAcl(new ArrayList<>(Arrays.asList(Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER))))
                            .build(),
                    file.getInputStream());
        } catch (IOException exception) {
            throw new GCSUploadException("Failed to upload file to GCS");
        }

        return blobInfo.getMediaLink();
    }
}

